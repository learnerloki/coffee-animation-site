# ☕ Coffee Animation Website

A premium coffee landing page built with **Next.js**, featuring a **scroll-driven cinematic frame animation** rendered on an HTML5 canvas.

The hero section uses a sequence of rendered frames to create a smooth, interactive animation controlled entirely by user scrolling.

---

## ✨ Features

* 🎬 **Scroll-Driven Animation**

  * Frame-by-frame animation rendered on HTML5 Canvas
  * Bi-directional scrolling (forward & reverse)
  * Smooth interpolation using scroll progress

* 🎨 **Modern UI**

  * Premium coffee-themed design
  * TailwindCSS styling
  * Elegant typography

* ⚡ **High Performance**

  * Canvas rendering
  * Frame preloading
  * Responsive scaling

* 📱 **Fully Responsive**

  * Works across desktop and mobile

---

## 🧠 How the Animation Works

Instead of using a video, the hero animation is built using **image sequences**.

The page listens to scroll progress and maps it to a frame index:

```
scroll progress → frame index → canvas render
```

This allows the animation to:

* play forward when scrolling down
* play backward when scrolling up
* remain perfectly synced with user interaction

---

## 🛠 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Animation:** Framer Motion
* **Rendering:** HTML5 Canvas
* **Deployment:** Vercel / Netlify

---

## 📂 Project Structure

```
app/
   page.tsx

components/
   HeroCanvasAnimation.tsx
   ProductShowcase.tsx
   ProductCard.tsx
   FeatureSection.tsx
   FinalCTA.tsx

data/
   products.ts

public/
   frames/
      frame_1.png
      frame_2.png
      ...
```

---

## 🚀 Getting Started

Clone the repository:

```
git clone https://github.com/learnerloki/coffee-animation-site.git
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in your browser:

```
http://localhost:3000
```

---

## 🖼 Animation Frames

The animation uses a sequence of PNG images stored in:

```
/public/frames
```

Each frame is rendered to the canvas depending on scroll position.

Example:

```
frame_1.png
frame_2.png
frame_3.png
...
```

---

## 🎯 Future Improvements

* Full coffee **menu system**
* **Cart and checkout** functionality
* **Ingredient customization**
* Stripe **payment integration**
* WebP optimization for frame assets
* WebGL-based animation for even better performance

---

## 📦 Deployment

The project can be deployed easily using:

* Vercel
* Netlify

Example:

```
npm run build
```

---

## 🙌 Credits

Built as an experiment in **scroll-driven web animation** and immersive product landing pages.

Inspired by cinematic product experiences used by brands like Apple and Nike.

---

## 📜 License

MIT License
