
## 📦 Radnyee – Full Stack E-Commerce Platform

A modern, full-stack **multi-store e-commerce platform** with an **admin dashboard (SaaS-style CMS)** and a **customer-facing storefront**, built using the latest Next.js App Router.

This project is inspired by a real-world production architecture and focuses on scalability, clean UI, and maintainability.

---

## ✨ Features

### 🧠 Admin Dashboard

* Multi-store support (one admin → many stores)
* Store creation via modal
* Product management (CRUD)
* Categories, sizes & colors (filters)
* Billboards / hero banners
* Featured & archived products
* Order management
* Revenue & sales overview
* Dark mode support
* Secure authentication (Clerk)

### 🛍️ Storefront

* Product listing synced from dashboard
* Category-based navigation
* Filters (size, color)
* Product gallery & quick preview
* Cart with persistence
* Stripe checkout
* Automatic product archiving after purchase

---

## 🛠️ Tech Stack

**Frontend & Backend**

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* shadcn/ui (Radix UI)

**State & Forms**

* Zustand (global state)
* React Hook Form
* Zod (schema validation)

**Auth & Payments**

* Clerk Authentication
* Stripe

**Database**

* Prisma ORM
* PlanetScale (MySQL)

---

## 📂 Project Structure

```
.
├── app/
│   ├── (auth)/        # Sign in / Sign up
│   ├── (root)/        # Setup / root logic
│   ├── (dashboard)/  # Admin dashboard
│   └── layout.tsx
├── components/
│   ├── ui/            # shadcn components
│   └── modals/
├── hooks/
├── lib/
├── providers/
├── prisma/
└── public/
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/radnyee.git
cd radnyee
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment variables

Create a `.env` file:

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Database
DATABASE_URL=

# Stripe
STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=
```

### 4️⃣ Run the app

```bash
npm run dev
```

Visit:
👉 `http://localhost:3000`

---

## 🔐 Authentication

* Uses **Clerk**
* App Router–compatible setup
* Protected dashboard routes
* Ready for MFA and multi-account support

---

## 🧩 Status

🚧 **In active development**

Current focus:

* Store creation flow
* Prisma schema & database connection
* Dashboard CRUD features

---

## 📌 Notes

* Architecture is intentionally SaaS-ready and reusable beyond e-commerce.

---

## 👤 Author

**Aryan Shinde**
Full Stack Developer
📍 Pune, India

