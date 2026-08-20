# Shutter 2000 International (Pvt) Ltd - Corporate Website & CMS

A high-performance, responsive corporate website and standalone client-side Admin Panel built for **Shutter 2000 International (Pvt) Ltd** — Sri Lanka's premier fabricators and direct importers of motorized roller doors, retractable security gates, and industrial high-speed door solutions.

---

## 🌟 Key Features

- **Elcardo-Style Visual Identity:** Corporate blue (`#1550a8`), red accents, gold badges, and clean typography.
- **Hero Carousel Banner:** High-impact dynamic slideshow with customizable headings, subtitles, descriptions, and CTA links.
- **Product Catalog & Spec Modal:** Filterable by category (Roller Doors, Retractable Gates, High-Speed Doors, Smart Automation, Spare Parts) with full technical specifications and direct WhatsApp inquiry buttons.
- **Interactive Colorbond Swatch Selector:** Real-time visual finish preview with authentic Sri Lankan colorbond textures (Dark Green, Lazurite Blue, Teak Woodgrain, Mahogany, Slate Grey, Off-White, Zinc, Matte Black).
- **Interactive Door Cost Estimator:** Real-time price estimator based on door width, height, material grade, and motor accessories.
- **Manufacturing Standards & Branch Network:** Ratmalana Main Engineering Complex, Kandy Hub, Galle Hub, and Colombo regional centers.
- **Project Showcase Gallery:** Interactive lightbox modal with category filters and WhatsApp quotation forwarding.
- **Standalone Admin CMS (`admin.html`):** 
  - PIN Protected (Default PIN: `2000`)
  - 10 full management tabs allowing editing of every single letter, link, image URL, product spec, and branch without touching code.
  - Live cross-tab sync via `localStorage`.

---

## 🚀 Technologies Used

- **HTML5 & Semantic Structure**
- **Tailwind CSS (via CDN)**
- **FontAwesome 6.4.0 (Icons)**
- **Vanilla JavaScript (ES6+)**
- **LocalStorage Data Persistence**

---

## 📁 Project Structure

```
├── index.html          # Public Corporate Website
├── admin.html          # Secure Admin Panel CMS (PIN: 2000)
├── data.js             # Seed Data & Persistence Engine
├── images/             # High-Resolution Sri Lankan Product & Installation Photos
└── README.md           # Documentation
```

---

## 💻 How to Run Locally

1. Clone or download this repository:
   ```bash
   git clone <REPO_URL>
   ```
2. Open `index.html` in any modern web browser.
3. Access `admin.html` to manage content (Default PIN: `2000`).

---

## 🔒 Security & Admin Access

- Default Admin PIN: **`2000`**
- The PIN can be changed at any time from the **Security & PIN** tab inside `admin.html`.
- JSON Backup & Restore features are available in the admin panel to export or import site content.
