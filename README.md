
# 🛒 ShopCart

A modern shopping cart system built with Next.js 15, Zustand, and TypeScript

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-593D88?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)


## ✨ Features

- **Modern UI**: Clean, minimalist design with smooth animations and transitions
- **Responsive**: Fully responsive design works on all devices
- **Persistent Cart**: Shopping cart persists across sessions using Zustand with persistence
- **TypeScript**: Fully typed codebase for better developer experience and fewer bugs
- **Mini Cart**: Quick access dropdown cart in header
- **Detailed Cart Page**: Complete cart management with quantity controls
- **State Management**: Efficient state management with Zustand
- **Next.js 15**: Built with the latest Next.js 15 App Router for optimized performance and SEO

## 🚀 Quick Start

```bash
# Clone this repository
git clone https://github.com/yourusername/shop-cart.git

# Navigate to the project directory
cd shop-cart

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application in action.

## 🧩 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with common elements
│   │   ├── page.tsx          # Home page
│   │   └── cart/
│   │       └── page.tsx      # Cart page
│   ├── components/
│   │   ├── CartItem.tsx      # Cart item component
│   │   ├── Header.tsx        # Header with navigation
│   │   ├── MiniCart.tsx      # Mini cart dropdown
│   │   └── ProductCard.tsx   # Product display card
│   ├── lib/
│   │   └── products.ts       # Product data
│   └── store/
│       └── cartStore.ts      # Zustand store
├── next.config.mjs           # Next.js configuration
├── tailwind.config.ts        # Tailwind configuration
└── package.json              # Project dependencies
```

## 🛠️ Core Technologies

- **Next.js 15**: React framework with App Router for better SEO
- **TypeScript**: Strongly typed programming language
- **Zustand**: State management
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: UI component library
- **Sonner**: Toast notifications

## 🧠 State Management with Zustand

The app uses Zustand for state management, with a cart store that handles:

- Adding products to cart
- Removing products from cart
- Updating product quantities
- Calculating totals
- Persisting cart between sessions

Example usage:

```tsx
import { useCartStore } from '@/store/cartStore';

// In your component
const { items, addItem, removeItem } = useCartStore();

// Add to cart
addItem(product);

// Remove from cart
removeItem(productId);
```

## 📦 Cart Data Structure

```ts
interface CartState {
  items: CartItem[];       // Items in cart
  totalItems: number;      // Total number of items
  totalPrice: number;      // Total price of all items
  
  // Actions
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}
```

## 🔄 API Integration

To connect this frontend to a real API:

1. Create API service files in `src/services/`
2. Replace the sample product data with API calls
3. Use Next.js data fetching methods like server components or server actions
4. Update the Zustand store to work with your API responses

## 📝 License

[MIT](LICENSE)

