/* ==========================================================================
   CANOPY VIETNAM — SCRIPT DÙNG CHUNG CHO TOÀN BỘ WEBSITE (nhiều trang)
   Xử lý: menu mobile + dropdown, hiệu ứng cuộn, accordion FAQ,
   gửi form liên hệ qua Formspree, tự cập nhật năm ở footer.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 0. Đánh dấu JS đã sẵn sàng ---------- */
  document.body.classList.add('js-ready');

  /* ---------- 1. Menu mobile (hamburger) + dropdown "Sản phẩm" ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // Trên mobile: bấm vào mục có dropdown ("Sản phẩm") để mở/đóng danh sách con
    // thay vì đi thẳng tới link (chỉ áp dụng khi menu mobile đang mở).
    document.querySelectorAll('.has-dropdown > a').forEach(function (link) {
      link.addEventListener('click', function (e) {
        if (window.innerWidth <= 720) {
          e.preventDefault();
          link.parentElement.classList.toggle('open');
        }
      });
    });

    // Đóng menu khi bấm vào 1 link con (không có dropdown)
    navLinks.querySelectorAll('a').forEach(function (link) {
      if (link.parentElement.classList.contains('has-dropdown')) return;
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
    navLinks.querySelectorAll('.dropdown-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- 2. Hiệu ứng hiện dần khi cuộn trang ---------- */
  var revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealEls.forEach(function (el) { observer.observe(el); });

    setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }, 2500);
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- 3. Đổi nền header khi cuộn ---------- */
  var header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 12) {
      header.style.boxShadow = '0 6px 24px rgba(13,46,26,0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  /* ---------- 4. Accordion FAQ ---------- */
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        var q = i.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- 5. Form liên hệ ----------
     Mặc định form gửi thẳng qua Formspree (xem README.md để lấy link riêng).
     Nếu chưa cấu hình, form sẽ hiển thị thông báo demo. */
  document.querySelectorAll('form.contact-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        e.preventDefault();
        alert('Form đang ở chế độ demo. Hãy làm theo hướng dẫn trong README.md (mục "Kết nối Form liên hệ") để form gửi được email thật.');
      }
      // Nếu action đã được cấu hình đúng (Formspree), form sẽ gửi đi như bình thường.
    });
  });

  /* ---------- 6. Tự cập nhật năm ở footer ---------- */
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- 7. Nút "Sao chép liên kết" trên bài blog (nếu có) ---------- */
  document.querySelectorAll('[data-copy-link]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var url = window.location.href;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(function () {
          var original = btn.getAttribute('aria-label');
          btn.setAttribute('aria-label', 'Đã sao chép!');
          setTimeout(function () { btn.setAttribute('aria-label', original); }, 1800);
        });
      }
    });
  });

});
