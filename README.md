# 🌿 Plants Avenue

A modern and responsive **plant shop landing page** built with **React, Vite, Tailwind CSS, and Swiper.js**.

Plants Avenue is a frontend e-commerce template designed for a plant and flower shop. It focuses on a clean, nature-inspired visual style, responsive layouts, product showcases, and a mobile-friendly navigation experience.

> 🚧 **Project Status:** Frontend template / early development

---

## 🌐 Language

🇬🇧 **English** | 🇮🇷 [فارسی](README_FA.md)

---

## ⭐ Preview
<div>
    <img valign="top" height="1362" alt="image" src="https://github.com/user-attachments/assets/9e730739-cf48-4ca6-bf0f-24577a742d88" />
    <img valign="top" height="1362" alt="image" src="https://github.com/user-attachments/assets/defe27e7-d853-48c5-a513-ed44b7d406fe" />
</div>

## ✨ Features

* 🌿 Plant shop / flower shop themed UI
* 📱 Responsive design for mobile, tablet, and desktop
* 🏠 Modern landing page
* 🖼️ Hero section with plant imagery
* 🪴 Product categories
* 🛍️ Product cards
* 🎠 Responsive product sliders powered by Swiper.js
* 🆕 New Products section
* 🌱 Plant care / educational sections
* 📸 Instagram-style image gallery
* 📧 Newsletter subscription UI
* 🧭 Responsive navigation menu
* 🛒 Shopping basket UI
* 🔗 React Router integration
* 🎨 Tailwind CSS styling
* ✨ Lucide icons
* 🔤 Outfit font
* 📱 Mobile navigation drawer

---

## 🖥️ Preview

The project currently contains a responsive plant-shop homepage with:

* Hero banner
* Navigation bar
* Service highlights
* Product categories
* Product sliders
* Plant care information
* Educational content
* New products
* Instagram gallery
* Newsletter form
* Footer

The repository also includes preview screenshots in the original README.

---

## 🛠️ Tech Stack

| Technology          | Purpose                           |
| ------------------- | --------------------------------- |
| React 19            | UI development                    |
| Vite 7              | Development server and build tool |
| Tailwind CSS 4      | Styling and responsive layouts    |
| Swiper 12           | Product carousels                 |
| React Router 7      | Client-side routing               |
| Lucide React        | UI icons                          |
| Styled Components   | Component styling support         |
| Fontsource / Outfit | Typography                        |
| ESLint              | Code quality and linting          |

---

## 📦 Dependencies

Main dependencies include:

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

Development tooling includes Vite, React plugin support, ESLint, and React-specific ESLint plugins.

---

## 📂 Project Structure

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

## 🧩 Architecture

The application uses a simple React component architecture.

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

The main application is wrapped with `BrowserRouter`, while the homepage is currently registered at `/`.

---

## 🎠 Product Slider

Product showcases use **Swiper.js**.

The slider is responsive and changes the number of visible products depending on screen width:

| Screen width | Products |
| ------------ | -------: |
| Mobile       |        2 |
| Small tablet |        3 |
| Tablet       |        4 |
| Desktop      |        5 |

Pagination is also enabled and clickable.

---

## 🧭 Navigation

The navigation bar includes:

* Home
* Shop
* Sale
* Blog
* About
* Shopping basket

On smaller screens, the navigation transforms into a mobile menu controlled by React state.

> **Note:** These links currently point to the homepage and are prepared for future pages/routes.

---

## 🎨 Design

Plants Avenue uses a nature-inspired visual language based primarily around:

* Deep green backgrounds
* Light green sections
* Orange accent buttons
* Rounded cards
* Large plant imagery
* Responsive layouts
* Minimal typography

The project uses the **Outfit** font through Fontsource.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ArshiaGalaxy/plants-avenue.git
cd plants-avenue
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite is configured to expose the development server to the host, making it convenient for local network testing.

### 4. Open the application

Vite will display the local development URL in the terminal.

---

## 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🔍 Linting

Run ESLint with:

```bash
npm run lint
```

The repository includes ESLint configuration and React-specific linting plugins.

---

## 🗺️ Roadmap

The current project is primarily a frontend template. Possible future improvements include:

* [ ] Add dedicated Shop page
* [ ] Add product details page
* [ ] Add shopping cart functionality
* [ ] Add checkout flow
* [ ] Add product filtering
* [ ] Add product search
* [ ] Add product categories
* [ ] Add wishlist
* [ ] Add authentication
* [ ] Connect to a backend API
* [ ] Add real product data
* [ ] Add real newsletter submission
* [ ] Connect social media links
* [ ] Add Blog page
* [ ] Add About page
* [ ] Improve accessibility
* [ ] Add SEO metadata
* [ ] Add dark mode

---

## ⚠️ Current Limitations

This repository is currently a **frontend UI/template**, not a complete e-commerce platform.

Some UI elements are currently placeholders or are prepared for future functionality.

For example:

* Navigation items currently route to `/`
* Product cards currently link to `/`
* The newsletter form is currently UI-only
* Social links are placeholders
* Product data is currently defined directly in the homepage
* There is no backend or payment system
* There is no persistent shopping cart yet

These limitations are intentional as the project is still under development.

---

## 🤝 Contributing

Contributions, suggestions, UI improvements, and bug reports are welcome.

### Development workflow

```bash
git checkout -b feature/my-feature
```

Make your changes, test them locally, then commit:

```bash
git add .
git commit -m "Add my feature"
git push origin feature/my-feature
```

After pushing your branch, open a Pull Request.

---

## 📄 License

A license has not currently been specified for this repository.

Until a license is added, please do not assume that the source code can be freely redistributed or reused.

---

## 🌐 Language

🇬🇧 **English** | 🇮🇷 [فارسی](README_FA.md)
