# Abhikya Natural Soaps Storefront

A modern, responsive e-commerce web application for artisanal handmade natural soaps. Built with React 18, TypeScript, Vite, Tailwind CSS, and Radix UI / shadcn components.

---

## Features

- **Hero & Storytelling Showcase**: Warm, elegant typography and imagery introducing pure, chemical-free handmade soap collections.
- **Product Catalog & Category Exploration**: Dynamic product grid with filtering across soap categories, ingredient highlights, and pricing cards.
- **Interactive Cart Management**: Add-to-cart functionality, quantity adjustment, subtotal calculations, and cart drawer preview.
- **Checkout & Payment Flow**: Multi-step checkout experience including delivery address entry, payment method selection, and order confirmation receipt.
- **Accessible UI Primitives**: Accessible design using Radix UI components (dialogs, tooltips, accordions, dropdowns) styled with Tailwind CSS.
- **Toast Notifications**: Interactive status alerts via Sonner for cart updates and order progression.

---

## Tech Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Tailwind CSS Animate, PostCSS
- **UI Primitives**: Radix UI, shadcn/ui components
- **Routing**: React Router DOM v6
- **State & Data Fetching**: TanStack React Query
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form, Zod

---

## Project Structure

```text
abhikya-soap-singlepage/
├── public/                 # Static assets and icons
├── src/
│   ├── assets/             # Brand logos, soap imagery, and illustrations
│   ├── components/         # Reusable UI components & shadcn primitives
│   │   └── ui/             # Buttons, cards, modals, toast, and inputs
│   ├── hooks/              # Custom React hooks (toast, mobile detection)
│   ├── lib/                # Utility helpers and clsx/tailwind-merge
│   ├── pages/              # Primary route views (Index, Products, Cart, Payment)
│   ├── App.css
│   ├── App.tsx             # Application routes and context providers
│   ├── index.css           # Global Tailwind and font styles
│   └── main.tsx            # Vite DOM hydration entry
├── index.html              # HTML shell with Google fonts
├── package.json            # Project dependencies and scripts
├── tailwind.config.ts      # Tailwind configuration with custom theme tokens
├── tsconfig.json           # TypeScript compiler configuration
└── vite.config.ts          # Vite bundler configuration
```

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/azimrehan/abhikya-soap-singlepage.git
   cd abhikya-soap-singlepage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

   Open your browser at `http://localhost:8080`.

### Production Build

To build the static production bundle:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
