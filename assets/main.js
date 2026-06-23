/* ==========================================================================
   CANOPY VIETNAM — SCRIPT
   File này xử lý: menu mobile, chuyển tab sản phẩm, hiệu ứng cuộn,
   và gửi form liên hệ qua Formspree (xem hướng dẫn trong README.md).
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 0. Đánh dấu JS đã sẵn sàng ----------
     CSS chỉ ẩn phần tử .reveal khi <body> có class "js-ready".
     Nhờ vậy nếu JS chưa chạy kịp hoặc bị lỗi, nội dung vẫn hiển thị bình thường. */
  document.body.classList.add('js-ready');

  /* ---------- 1. Menu mobile (hamburger) ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
    });

    // Đóng menu khi bấm vào 1 link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- 2. Chuyển tab danh mục sản phẩm ---------- */
  var tabs = document.querySelectorAll('.product-tab');
  var groups = document.querySelectorAll('.product-group');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-target');

      tabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      groups.forEach(function (g) {
        g.classList.toggle('active', g.getAttribute('id') === target);
      });
    });
  });

  /* ---------- 3. Hiệu ứng hiện dần khi cuộn trang ---------- */
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

    // Lưới an toàn: nếu sau 2.5s vẫn còn phần tử chưa hiện (ví dụ do lỗi đo
    // kích thước trang, in ấn, hoặc công cụ chụp ảnh tự động), cho hiện hết.
    setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add('in-view'); });
    }, 2500);
  } else {
    revealEls.forEach(function (el) { el.classList.add('in-view'); });
  }

  /* ---------- 4. Đổi nền header khi cuộn ---------- */
  var header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 12) {
      header.style.boxShadow = '0 6px 24px rgba(13,46,26,0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });

  /* ---------- 5. Form liên hệ ----------
     Mặc định form gửi thẳng qua Formspree (xem README.md để lấy link riêng).
     Nếu chưa cấu hình, form sẽ chỉ hiển thị thông báo demo. */
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        e.preventDefault();
        alert('Form đang ở chế độ demo. Hãy làm theo hướng dẫn trong README.md (mục "Kết nối Form liên hệ") để form gửi được email thật.');
      }
      // Nếu action đã được cấu hình đúng (Formspree), form sẽ gửi đi như bình thường.
    });
  }

  /* ---------- 6. Tự cập nhật năm ở footer ---------- */
  var yearEl = document.getElementById('current-year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

});
