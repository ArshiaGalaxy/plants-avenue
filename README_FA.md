# 🌿 Plants Avenue

یک **صفحه‌ی فروشگاه گیاه و گل** مدرن و واکنش‌گرا که با استفاده از **React، Vite، Tailwind CSS و Swiper.js** ساخته شده است.

Plants Avenue یک قالب Frontend برای فروشگاه گیاهان و گل‌هاست که روی طراحی تمیز و الهام‌گرفته از طبیعت، نمایش محصولات، واکنش‌گرایی و تجربه‌ی مناسب موبایل تمرکز دارد.

> 🚧 **وضعیت پروژه:** قالب Frontend / در حال توسعه

---

## 🌐 زبان

🇬🇧 [English](README.md) | 🇮🇷 **فارسی**

---
## ⭐ نمایش

<div>
    <img valign="top" height="1362" alt="image" src="https://github.com/user-attachments/assets/9e730739-cf48-4ca6-bf0f-24577a742d88" />
    <img valign="top" height="1362" alt="image" src="https://github.com/user-attachments/assets/defe27e7-d853-48c5-a513-ed44b7d406fe" />
</div>

## ✨ امکانات

* 🌿 رابط کاربری با موضوع فروشگاه گیاه و گل
* 📱 طراحی واکنش‌گرا برای موبایل، تبلت و دسکتاپ
* 🏠 صفحه‌ی اصلی مدرن
* 🖼️ بخش Hero با تصاویر گیاهان
* 🪴 دسته‌بندی محصولات
* 🛍️ کارت محصولات
* 🎠 اسلایدر واکنش‌گرای محصولات با Swiper.js
* 🆕 بخش محصولات جدید
* 🌱 بخش‌های آموزشی و مراقبت از گیاهان
* 📸 گالری تصاویر به سبک Instagram
* 📧 رابط کاربری عضویت در Newsletter
* 🧭 منوی واکنش‌گرا
* 🛒 رابط کاربری سبد خرید
* 🔗 استفاده از React Router
* 🎨 استایل‌دهی با Tailwind CSS
* ✨ آیکون‌های Lucide
* 🔤 استفاده از فونت Outfit
* 📱 منوی مخصوص موبایل

---

## 🖥️ پیش‌نمایش

صفحه‌ی اصلی فعلی شامل بخش‌های زیر است:

* Hero
* Navigation
* معرفی خدمات
* دسته‌بندی محصولات
* اسلایدر محصولات
* بخش مراقبت از گیاهان
* بخش آموزشی
* محصولات جدید
* گالری Instagram
* Newsletter
* Footer

تصاویر پیش‌نمایش پروژه نیز در README فعلی repository قرار دارند.

---

## 🛠️ تکنولوژی‌ها

| تکنولوژی            | کاربرد                         |
| ------------------- | ------------------------------ |
| React 19            | توسعه رابط کاربری              |
| Vite 7              | Development Server و Build     |
| Tailwind CSS 4      | استایل‌دهی و Responsive Design |
| Swiper 12           | اسلایدر محصولات                |
| React Router 7      | مسیریابی سمت کاربر             |
| Lucide React        | آیکون‌های رابط کاربری          |
| Styled Components   | پشتیبانی از Component Styling  |
| Fontsource / Outfit | فونت پروژه                     |
| ESLint              | بررسی کیفیت کد                 |

---

## 📦 وابستگی‌های اصلی

وابستگی‌های اصلی پروژه شامل موارد زیر هستند:

```text
react
react-dom
react-router-dom
swiper
tailwindcss
@tailwindcss/vite
lucide-react
styled-components
@fontsource/outfit
```

ابزارهای توسعه نیز شامل Vite، پلاگین React، ESLint و پلاگین‌های مخصوص React هستند.

---

## 📂 ساختار پروژه

```text
plants-avenue/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── cat-1.png
│   │   ├── cat-2.png
│   │   ├── pro-1.png
│   │   ├── pro-2.png
│   │   ├── pro-3.png
│   │   ├── pro-4.png
│   │   ├── read-1.png
│   │   ├── read-2.png
│   │   └── texture.jpg
│   │
│   ├── components/
│   │   ├── home/
│   │   │   ├── categoryCard.jsx
│   │   │   ├── productCard.jsx
│   │   │   └── productSlider.jsx
│   │   │
│   │   ├── footer.jsx
│   │   ├── logo.jsx
│   │   └── nav.jsx
│   │
│   ├── pages/
│   │   └── index.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🧩 معماری پروژه

ساختار پروژه بر پایه‌ی Componentهای React طراحی شده است.

```text
main.jsx
   │
   ▼
 App.jsx
   │
   ├── React Router
   │
   ├── Navigation
   │
   └── Home Page
          │
          ├── Hero
          ├── Categories
          ├── Product Slider
          ├── Plant Care
          ├── Educational Section
          ├── New Products
          ├── Instagram Gallery
          └── Footer
```

در `App.jsx` برنامه داخل `BrowserRouter` قرار گرفته و صفحه‌ی Home در مسیر `/` نمایش داده می‌شود.

---

## 🎠 اسلایدر محصولات

نمایش محصولات با استفاده از **Swiper.js** انجام شده است.

تعداد محصولات قابل مشاهده با توجه به اندازه‌ی صفحه تغییر می‌کند:

| اندازه صفحه | تعداد محصولات |
| ----------- | ------------: |
| موبایل      |             ۲ |
| تبلت کوچک   |             ۳ |
| تبلت        |             ۴ |
| دسکتاپ      |             ۵ |

Pagination نیز فعال است و کاربر می‌تواند از طریق آن بین محصولات جابه‌جا شود.

---

## 🧭 منوی Navigation

منوی اصلی شامل موارد زیر است:

* Home
* Shop
* Sale
* Blog
* About
* Shopping Basket

در نمایشگرهای کوچک، منوی اصلی به یک منوی موبایلی تبدیل می‌شود که با State در React کنترل می‌شود.

> **نکته:** لینک‌های فعلی برای صفحات آینده آماده شده‌اند و در حال حاضر به مسیر `/` اشاره می‌کنند.

---

## 🎨 طراحی

Plants Avenue از یک طراحی الهام‌گرفته از طبیعت استفاده می‌کند و عناصر اصلی آن شامل موارد زیر هستند:

* پس‌زمینه‌های سبز تیره
* بخش‌های سبز روشن
* رنگ نارنجی به‌عنوان Accent
* کارت‌های Rounded
* تصاویر بزرگ گیاهان
* طراحی Responsive
* تایپوگرافی ساده و مدرن

فونت **Outfit** نیز از طریق Fontsource در پروژه استفاده شده است.

---

## 🚀 شروع کار

### 1. دریافت پروژه

```bash
git clone https://github.com/ArshiaGalaxy/plants-avenue.git
cd plants-avenue
```

### 2. نصب وابستگی‌ها

```bash
npm install
```

### 3. اجرای Development Server

```bash
npm run dev
```

Vite برای Development Server طوری تنظیم شده که روی Host قابل دسترسی باشد و برای تست در شبکه‌ی محلی نیز مناسب باشد.

### 4. باز کردن برنامه

پس از اجرای دستور، Vite آدرس محلی پروژه را در Terminal نمایش می‌دهد.

---

## 🏗️ ساخت نسخه Production

برای ساخت نسخه Production:

```bash
npm run build
```

برای مشاهده‌ی نسخه Production به‌صورت محلی:

```bash
npm run preview
```

---

## 🔍 بررسی کد

برای اجرای ESLint:

```bash
npm run lint
```

پروژه دارای تنظیمات ESLint و پلاگین‌های مخصوص React است.

---

## 🗺️ مسیر توسعه

پروژه در حال حاضر بیشتر یک قالب Frontend است. قابلیت‌های احتمالی آینده:

* [ ] افزودن صفحه Shop
* [ ] افزودن صفحه جزئیات محصول
* [ ] افزودن Shopping Cart واقعی
* [ ] افزودن Checkout
* [ ] افزودن فیلتر محصولات
* [ ] افزودن جستجوی محصولات
* [ ] افزودن دسته‌بندی‌های واقعی
* [ ] افزودن Wishlist
* [ ] افزودن Authentication
* [ ] اتصال به Backend API
* [ ] استفاده از اطلاعات واقعی محصولات
* [ ] اتصال واقعی Newsletter
* [ ] اتصال لینک‌های شبکه‌های اجتماعی
* [ ] افزودن صفحه Blog
* [ ] افزودن صفحه About
* [ ] بهبود Accessibility
* [ ] افزودن SEO Metadata
* [ ] افزودن Dark Mode

---

## ⚠️ محدودیت‌های فعلی

این repository در حال حاضر یک **Frontend UI / Template** است و هنوز یک فروشگاه اینترنتی کامل محسوب نمی‌شود.

برخی از بخش‌های رابط کاربری فعلاً Placeholder هستند یا برای قابلیت‌های آینده آماده شده‌اند.

برای مثال:

* لینک‌های Navigation فعلاً به `/` اشاره می‌کنند.
* کارت‌های محصولات فعلاً به `/` لینک می‌شوند.
* فرم Newsletter فعلاً فقط رابط کاربری است.
* لینک‌های شبکه‌های اجتماعی Placeholder هستند.
* اطلاعات محصولات مستقیماً داخل صفحه Home تعریف شده‌اند.
* Backend یا سیستم پرداخت وجود ندارد.
* Shopping Cart دائمی هنوز پیاده‌سازی نشده است.

این موارد به دلیل وضعیت فعلی پروژه و توسعه‌ی تدریجی آن هستند.

---

## 🤝 مشارکت

ایده‌ها، پیشنهادها، بهبودهای UI و گزارش Bugها مورد استقبال هستند.

### روند پیشنهادی توسعه

```bash
git checkout -b feature/my-feature
```

پس از اعمال و تست تغییرات:

```bash
git add .
git commit -m "Add my feature"
git push origin feature/my-feature
```

سپس می‌توانید یک Pull Request ایجاد کنید.

---

## 📄 License

در حال حاضر License مشخصی برای این repository تعریف نشده است.

تا زمانی که License مشخصی اضافه نشده، فرض نکنید که کد پروژه آزادانه قابل بازنشر یا استفاده است.

---

## 🌐 زبان

🇬🇧 [English](README.md) | 🇮🇷 **فارسی**
