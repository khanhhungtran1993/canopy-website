# Website Canopy Vietnam — Hướng dẫn sử dụng (bản nhiều trang, chuẩn SEO)

Đây là website giới thiệu công ty **Canopy Vietnam (Tán Rừng Việt Nam)**, xây bằng
HTML/CSS/JavaScript thuần — **không cần cài đặt gì, không cần biết lập trình** để sửa nội dung.

Bản này đã được **tái cấu trúc thành nhiều trang** (thay vì 1 trang dài như trước) theo đúng sơ đồ
SEO đã thống nhất, đồng thời bổ sung: thẻ mô tả cho Google (SEO), thẻ chia sẻ cho Facebook/Zalo
(Open Graph), dữ liệu có cấu trúc (Schema.org), sitemap.xml, robots.txt, trang tiếng Anh cho khách
xuất khẩu, và một bộ minh hoạ đồ hoạ (SVG) theo đúng màu thương hiệu để dùng tạm trong lúc chưa có
ảnh chụp thực tế.

```
canopy-site/
├── index.html                          ← Trang chủ
├── gioi-thieu/index.html               ← Giới thiệu
├── san-pham/index.html                 ← Sản phẩm (tổng quan)
│   ├── cay-giong-keo-lai/index.html    ← Cây giống Keo lai
│   └── cay-giong-bach-dan/index.html   ← Cây giống Bạch đàn
├── cong-nghe-nuoi-cay-mo/index.html    ← Công nghệ & Quy trình
├── du-an-khach-hang/index.html         ← Dự án & Khách hàng
├── tin-tuc/index.html                  ← Tin tức – Kiến thức (danh sách bài viết)
│   └── <ten-bai-viet>/index.html       ← 3 bài viết mẫu
├── faq/index.html                      ← Câu hỏi thường gặp
├── tuyen-dung/index.html                ← Tuyển dụng
├── lien-he/index.html                  ← Liên hệ / Nhận báo giá (có form)
├── chinh-sach/index.html               ← Chính sách bảo mật & điều khoản
├── en/index.html                       ← Phiên bản tiếng Anh (cho khách xuất khẩu)
├── 404.html                             ← Trang báo lỗi khi không tìm thấy trang
├── sitemap.xml / robots.txt            ← Khai báo với Google
├── assets/
│   ├── style.css                       ← Màu sắc, font chữ, bố cục — DÙNG CHUNG mọi trang
│   ├── main.js                         ← Menu, hiệu ứng, accordion FAQ, form — DÙNG CHUNG mọi trang
│   ├── og-default.jpg                  ← Ảnh mặc định khi chia sẻ link lên Facebook/Zalo
│   ├── logo-mark.svg, logo-variants/   ← Logo chính thức và các phiên bản khác
│   └── products/                       ← Ảnh sản phẩm thật đặt vào đây (xem mục 6)
└── README.md                           ← File bạn đang đọc
```

**Quan trọng khi xem thử trên máy:** vì các trang dùng đường dẫn dạng `/assets/style.css`,
`/gioi-thieu/`..., bạn **không thể** mở trực tiếp file `index.html` bằng cách double-click (mở qua
`file://`) vì trình duyệt sẽ không tìm thấy đúng vị trí file. Hãy dùng một máy chủ tĩnh đơn giản,
ví dụ:

- VS Code: cài extension **"Live Server"**, bấm chuột phải vào `index.html` → **Open with Live Server**.
- Hoặc mở Terminal tại thư mục `canopy-site` và chạy: `python3 -m http.server 8000`, rồi mở
  `http://localhost:8000/` trên trình duyệt.

Khi đã đưa lên GitHub Pages / hosting thật thì mọi đường dẫn hoạt động bình thường, không cần làm
gì thêm.

---

## 1. Cách sửa nội dung (không cần biết code)

Mở file `.html` của trang muốn sửa bằng **Notepad / TextEdit / VS Code** (không mở bằng Word), hoặc
sửa trực tiếp trên GitHub bằng icon cây bút (xem mục 8). Mỗi phần nội dung đều có chú thích tiếng
Việt dạng:

```html
<!-- ==========================================================================
     TÊN PHẦN
     ========================================================================== -->
```

Quy tắc đơn giản:
- Văn bản hiển thị trên web là phần nằm **giữa hai dấu `>` và `<`**.
- Muốn đổi ảnh: tìm `src="..."`, dán link ảnh mới hoặc đường dẫn file mới vào giữa hai dấu ngoặc kép.
- Muốn đổi số điện thoại / email: tìm `tel:` hoặc `mailto:` và sửa theo, đồng thời sửa chữ hiển thị bên cạnh.
- **Mỗi trang là một file HTML riêng** — sửa nội dung trang nào thì mở đúng file `.html` của trang đó.
  Phần menu (header) và chân trang (footer) lặp lại giống nhau ở mọi trang; nếu muốn đổi menu/chân
  trang, cần sửa lặp lại ở từng file (đây là website tĩnh thuần, không dùng khung mẫu dùng chung).

### Thêm một sản phẩm / dòng giống mới
Vào đúng file trang danh mục (`san-pham/cay-giong-keo-lai/index.html` hoặc
`san-pham/cay-giong-bach-dan/index.html`), tìm khối `<div class="product-card">...</div>` hoặc
`<div class="variant-card">...</div>` có sẵn, copy nguyên khối, dán bên dưới rồi sửa lại nội dung.

### Thêm một bài viết mới trong Tin tức
1. Copy nguyên một thư mục bài viết có sẵn trong `tin-tuc/` (ví dụ copy thư mục
   `ky-thuat-trong-keo-lai-dat-nang-suat-cao/`), đổi tên thư mục mới theo tên bài viết (không dấu,
   không khoảng trắng, ví dụ `cach-bon-phan-cho-rung-bach-dan/`).
2. Mở file `index.html` trong thư mục vừa tạo, sửa tiêu đề, mô tả, breadcrumb và nội dung bài viết.
3. Thêm 1 thẻ `<a class="blog-card">...</a>` mới vào `tin-tuc/index.html` (trang danh sách) trỏ đến
   bài viết mới.

### Thêm/xóa mục trong menu điều hướng
Khối menu nằm trong `<ul class="nav-links">` ở đầu mỗi file — cần sửa **lặp lại ở tất cả các trang**
vì đây là site tĩnh không dùng khung mẫu chung.

### Đổi màu / font toàn trang
Mở file `assets/style.css`, sửa giá trị màu trong khối `:root` ở đầu file (ví dụ
`--canopy-green: #1E5E38;`) — đổi 1 chỗ này, **toàn bộ các trang** tự đổi theo vì mọi trang dùng
chung 1 file CSS.

---

## 2. Kết nối Form liên hệ (để nhận được email khi khách điền form)

Có 2 form trong website: `lien-he/index.html` (form chính, tiếng Việt) và `en/index.html` (form
tiếng Anh cho khách quốc tế). Cả hai đang dùng dịch vụ miễn phí **Formspree**:

1. Vào **https://formspree.io** → **Sign up** (dùng email công ty).
2. Bấm **+ New Form**, đặt tên ví dụ "Lien he Canopy Vietnam".
3. Formspree cho một đường link dạng: `https://formspree.io/f/abcd1234`
4. Mở từng file có form (`lien-he/index.html`, `en/index.html`), tìm dòng:
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Thay `YOUR_FORM_ID` bằng mã thật. **Có thể dùng chung 1 mã cho cả 2 form**, hoặc tạo 2 form riêng
   trên Formspree để phân biệt khách trong nước / quốc tế.
5. Lưu file, tải lại trang — từ giờ mỗi khi có người gửi form, bạn sẽ nhận email thông báo.

Gói miễn phí Formspree giới hạn ~50 lượt gửi/tháng.

**Trạng thái:** chưa cấu hình — form hiện chỉ hiện thông báo demo khi bấm gửi.

---

## 3. Đưa website lên Internet bằng GitHub Pages

1. Tạo repository Public trên GitHub, tải toàn bộ nội dung thư mục `canopy-site` lên (giữ nguyên cấu
   trúc thư mục con — rất quan trọng vì các trang nằm trong thư mục riêng).
2. Vào **Settings → Pages** → **Source: Deploy from a branch** → **Branch: main, / (root)** → **Save**.
3. Sau 1–2 phút, GitHub cấp link dạng `https://ten-tai-khoan.github.io/ten-repo/`.

> Vì các trang dùng đường dẫn tuyệt đối bắt đầu bằng `/` (ví dụ `/assets/style.css`), website **chỉ
> chạy đúng khi được host ở gốc tên miền** (ví dụ `canopyvietnam.vn/`), không phù hợp nếu host ở dạng
> `ten-tai-khoan.github.io/ten-repo/` (có thêm `/ten-repo/`). Vì vậy sau khi tạo repo, hãy gắn domain
> riêng ngay theo mục 4 bên dưới trước khi kiểm tra — hoặc trỏ domain phụ tạm thời trong lúc chờ.

## 4. Gắn domain riêng (canopyvietnam.vn)

Domain `canopyvietnam.vn` (mua qua Nhân Hòa, quản lý DNS tại ZoneDNS) trỏ về GitHub Pages:

**DNS đã cấu hình tại ZoneDNS (zonedns.vn):**

| Loại | Tên | Giá trị |
|------|-----|------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | khanhhungtran1993.github.io |

**Trên GitHub:** Settings → Pages → Custom domain = `canopyvietnam.vn`, bật **Enforce HTTPS**.

Nếu đổi domain, cần cập nhật lại giá trị `SITE.domain` trong toàn bộ thẻ `<link rel="canonical">`,
Open Graph (`og:url`, `og:image`...) và trong `sitemap.xml`/`robots.txt` — vì các file trong bản này
được sinh ra bằng script (xem mục 9), cách nhanh nhất là sửa domain trong script rồi chạy lại.

## 5. Về logo

`assets/logo-mark.svg` là **logo chính thức** (bản "Circle Dark", bộ nhận diện BI-CV-001 v2.0),
dùng cho header/footer/favicon trên mọi trang. Các phiên bản khác nằm trong `assets/logo-variants/`
— xem bảng mô tả từng file trong chính thư mục đó (tên file đã đặt rõ nghĩa).

## 6. Ảnh sản phẩm & ảnh minh hoạ — NÊN LÀM KHI CÓ ẢNH THẬT

Vì công ty **chưa cung cấp ảnh chụp thực tế**, toàn bộ hình ảnh trong bản này (banner trang chủ,
ảnh vườn ươm, ảnh phòng nuôi cấy mô, ảnh sản phẩm...) là **minh hoạ đồ hoạ (SVG) vẽ theo màu thương
hiệu**, KHÔNG phải ảnh chụp — mục đích để trang có giao diện đầy đủ, chuyên nghiệp ngay từ đầu thay
vì để trống hoặc dùng ảnh stock không liên quan.

Khi có ảnh thật, nên thay dần theo thứ tự ưu tiên:

1. **Banner trang chủ** (`index.html`, khối `.hero-visual`) — nên dùng ảnh toàn cảnh vườn ươm thật,
   chụp ngang (drone hoặc góc rộng), tỷ lệ 21:9.
2. **Ảnh sản phẩm** — đặt ảnh thật vào `assets/products/` theo tên gợi ý:
   - `keo-lai-giam-hom.jpg`, `keo-lai-cay-mo.jpg` (dùng trong `san-pham/cay-giong-keo-lai/index.html`)
   - `bach-dan-cay-mo.jpg` (dùng trong `san-pham/cay-giong-bach-dan/index.html`)

   Sau khi có ảnh, mở đúng file trang sản phẩm, tìm khối `<div class="pc-image">` đang chứa đoạn mã
   minh hoạ SVG, xoá đoạn đó và thay bằng `<img src="/assets/products/ten-file.jpg" alt="...">`.
3. **Ảnh Giới thiệu / Công nghệ / Dự án** — tương tự, tìm khối `<div class="about-image">` hoặc
   `<div class="cc-visual">`, thay minh hoạ SVG bằng `<img>` ảnh thật.
4. **Ảnh chia sẻ Facebook (og:image)** — hiện dùng chung 1 ảnh `assets/og-default.jpg` (banner
   thương hiệu) cho tất cả các trang. Khi có ảnh thật đẹp cho từng trang, có thể tạo ảnh riêng
   (kích thước khuyến nghị **1200×630px**) và sửa thẻ `<meta property="og:image" content="...">`
   trong phần `<head>` của từng trang.

> Chỉ dùng ảnh **HTTPS** hoặc ảnh tự upload lên GitHub. Ảnh từ link **HTTP** (không có "s") sẽ bị
> trình duyệt chặn vì trang web chạy HTTPS ("mixed content").

## 7. Kết nối Fanpage Facebook

- Sửa link Fanpage thật trong file `assets/... ` — thực chất là trong biến `SITE.fanpage` của script
  sinh trang (mục 9), hoặc nhanh hơn: tìm chuỗi `facebook.com/canopyvietnam` trong tất cả các file
  `.html` (biểu tượng Facebook ở chân trang) và thay bằng link Fanpage thật.
- Nếu muốn nhúng khung Fanpage (hộp "Thích trang") ngay trên website, có thể thêm
  [Facebook Page Plugin](https://developers.facebook.com/docs/plugins/page-plugin/) vào trang chủ
  hoặc trang Liên hệ sau khi có Fanpage chính thức.
- Nếu chạy quảng cáo Facebook Ads, nên gắn thêm **Meta Pixel** vào phần `<head>` của các trang quan
  trọng (trang chủ, trang sản phẩm, trang Liên hệ) để đo lường chuyển đổi.

## 8. Cách sửa nội dung sau khi đã lên GitHub

1. Vào repository trên GitHub → tìm đúng file `.html` cần sửa (chú ý: mỗi trang nằm trong thư mục
   con riêng, ví dụ trang FAQ là `faq/index.html`) → icon **cây bút (Edit)**.
2. Sửa trực tiếp trên trình duyệt → cuộn xuống → **Commit changes**.
3. Website tự cập nhật sau khoảng 30–60 giây (Ctrl+Shift+R để bỏ cache khi kiểm tra lại).

## 9. Về việc "sinh trang tự động" (dành cho người kỹ thuật)

Bản HTML trong thư mục này được sinh ra từ các file kịch bản JavaScript (không đi kèm trong bản bàn
giao này, chỉ có kết quả HTML/CSS/JS cuối cùng) để đảm bảo mọi trang dùng chung một khung
menu/chân trang/thẻ SEO nhất quán. Bạn **không bắt buộc phải hiểu phần này** — có thể sửa trực tiếp
từng file `.html` như hướng dẫn ở mục 1 mà không ảnh hưởng gì. Phần này chỉ hữu ích nếu sau này muốn
nhờ một lập trình viên bổ sung hàng loạt trang mới (ví dụ thêm nhiều bài viết blog) một cách nhất
quán thay vì gõ tay từng file.

## 10. Cấu trúc SEO đã áp dụng

- **Thẻ mô tả cho Google:** mỗi trang có `<title>`, `<meta name="description">` và
  `<link rel="canonical">` riêng, tối ưu theo từ khoá của từng trang.
- **Thẻ chia sẻ Facebook/Zalo (Open Graph):** mỗi trang có `og:title`, `og:description`, `og:image`
  riêng — khi dán link vào Facebook/Zalo sẽ hiện đúng tiêu đề, mô tả và ảnh đại diện thương hiệu.
- **Dữ liệu có cấu trúc (Schema.org):** Organization/LocalBusiness (trang chủ, liên hệ), Product
  (trang sản phẩm), Article (bài blog), FAQPage (trang FAQ), BreadcrumbList (mọi trang con) — giúp
  Google hiển thị kết quả tìm kiếm phong phú hơn (rich results).
- **sitemap.xml & robots.txt:** khai báo toàn bộ URL với Google Search Console.
- **Trang tiếng Anh `/en/`:** dành cho khách hàng/đối tác xuất khẩu, có liên kết `hreflang` với
  trang chủ tiếng Việt.

## 11. Việc còn cần làm (checklist)

- [ ] Bổ sung ảnh sản phẩm và ảnh vườn ươm thật (mục 6) để thay thế minh hoạ đồ hoạ tạm thời
- [ ] Kết nối Formspree để 2 form liên hệ (VI + EN) gửi được email thật (mục 2)
- [ ] Cập nhật địa chỉ, số điện thoại thật ở phần Liên hệ (đang là placeholder) — hiện có ở nhiều
      trang: trang chủ (footer), `lien-he/index.html`, `en/index.html`
- [ ] Cập nhật link Google Maps đúng vị trí vườn ươm trong `lien-he/index.html`
- [ ] Cập nhật link Fanpage Facebook thật (mục 7)
- [ ] Cài Google Search Console + Google Analytics 4 + Meta Pixel
- [ ] Đăng ký Google Business Profile cho vườn ươm (hỗ trợ tìm kiếm theo khu vực)
- [ ] Xem lại nội dung đánh dấu "placeholder/minh hoạ" tại trang Dự án & Khách hàng — thay bằng phản
      hồi và số liệu thật từ khách hàng đã hợp tác trước khi công bố chính thức
