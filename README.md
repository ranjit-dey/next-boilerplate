# 🚀 Next.js Boilerplate

A clean and scalable starter for building modern web applications with Next.js.
Pre-configured with best practices, optimized structure, and developer-friendly tooling.

---

## 📦 Features

* ⚡ Next.js App Router setup
* 🎨 Pre-configured fonts (Google + Local)
* 🧩 Scalable component architecture
* 🎯 SVG icons as reusable components
* 🧹 Prettier formatting setup
* 📁 Clean folder structure
* 🔥 Production-ready conventions

---

## 🛠️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Setup Prettier (Recommended)

Install extension:

* **Prettier - Code Formatter**

Update your `settings.json` in VS Code:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

---

## 🔤 Fonts Setup

### ✅ Google Fonts

📁 `/lib/fonts.ts`

```ts
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
})
```

**Usage:**

```tsx
import { montserrat } from '@/lib/fonts'

<p className={montserrat.className}>Hello World</p>
```

---

### ✅ Variable Local Fonts

```ts
import localFont from 'next/font/local'

export const inter = localFont({
  src: '../public/fonts/inter-variable.ttf',
  weight: '100 200 300 400 500 600 700 800 900',
  display: 'swap',
  variable: '--font-inter',
})
```

**Usage:**

```tsx
import { inter } from '@/lib/fonts'

<p className={inter.className}>Hello World</p>
```

---

### ✅ Static Local Fonts

```ts
import localFont from 'next/font/local'

export const saira = localFont({
  src: [
    { path: '../public/fonts/saira/saira-light.ttf', weight: '300' },
    { path: '../public/fonts/saira/saira-regular.ttf', weight: '400' },
    { path: '../public/fonts/saira/saira-medium.ttf', weight: '500' },
    { path: '../public/fonts/saira/saira-semibold.ttf', weight: '600' },
    { path: '../public/fonts/saira/saira-bold.ttf', weight: '700' },
    { path: '../public/fonts/saira/saira-extrabold.ttf', weight: '800' },
    { path: '../public/fonts/saira/saira-black.ttf', weight: '900' },
  ],
  variable: '--font-saira',
  display: 'swap',
})
```

---

## 🎨 SVG Icons as Components

📁 `/components/icons/Icons.tsx`

```tsx
export function GithubIcon({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 98 96"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path d="..." />
    </svg>
  )
}
```

**Usage:**

```tsx
import { GithubIcon } from '@/components/icons/Icons'

<GithubIcon className="w-5 h-5 fill-white hover:fill-red-500" />
```

---

## 🧱 Project Structure

```
.
├── app/
├── components/
│   ├── ui/
│   ├── icons/
├── lib/
├── public/
│   └── images/
```

---

## 📁 Folder & Naming Conventions

### 🔹 Components

* Use **PascalCase**
* Example:

  ```
  BoardOfDirectors.tsx
  ```

---

### 🔹 Routes

* Keep route files **clean & minimal**
* Break UI into smaller components

Example:

```
/app/capabilities/page.tsx
/components/capabilities/
```

---

### 🔹 Public Assets

* Store images by route

```
/public/images/capabilities/
```

---

### 🔹 Folder Naming

* Use **lowercase**
* Use **hyphens (-)** instead of spaces

### 🔹 Assets File Naming Conventions

* Use **lowercase**
* Use **hyphens (-)** instead of spaces


✅ Example:

```
capabilities-section/
team-members/
```

❌ Avoid:

```
Capabilities Section/
teamMembers/
```

---

## 🧩 Component Architecture

* `components/ui` → reusable UI elements (Button, Input, etc.)
* Feature-based components → grouped per page/feature

Example:

```
components/
├── ui/
│   └── button.tsx
├── capabilities/
│   ├── hero.tsx
│   ├── features.tsx
│   └── stats.tsx
```

---

## 💡 Best Practices

* Keep components **small & reusable**
* Avoid large page files
* Use **absolute imports (`@/...`)**
* Prefer **server components by default**
* Use **client components only when needed**

---
# next-boilerplate
