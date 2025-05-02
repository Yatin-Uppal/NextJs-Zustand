import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/lib/products';

export type CartItem = {
  product: Product;
  quantity: number;
};

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  
  // Actions
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      
      addItem: (product: Product, quantity: number = 1) => {
        const { items } = get();
        const existingItem = items.find(item => item.product.id === product.id);
        
        let newItems: CartItem[];
        
        if (existingItem) {
          newItems = items.map(item => 
            item.product.id === product.id 
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          newItems = [...items, { product, quantity }];
        }
        
        set(state => ({
          items: newItems,
          totalItems: state.totalItems + quantity,
          totalPrice: state.totalPrice + (product.price * quantity)
        }));
      },
      
      removeItem: (productId: number) => {
        const { items } = get();
        const itemToRemove = items.find(item => item.product.id === productId);
        
        if (!itemToRemove) return;
        
        set(state => ({
          items: state.items.filter(item => item.product.id !== productId),
          totalItems: state.totalItems - itemToRemove.quantity,
          totalPrice: state.totalPrice - (itemToRemove.product.price * itemToRemove.quantity)
        }));
      },
      
      updateQuantity: (productId: number, quantity: number) => {
        const { items } = get();
        const itemToUpdate = items.find(item => item.product.id === productId);
        
        if (!itemToUpdate) return;
        
        const quantityDiff = quantity - itemToUpdate.quantity;
        
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }
        
        set(state => ({
          items: state.items.map(item => 
            item.product.id === productId ? { ...item, quantity } : item
          ),
          totalItems: state.totalItems + quantityDiff,
          totalPrice: state.totalPrice + (itemToUpdate.product.price * quantityDiff)
        }));
      },
      
      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
          totalPrice: 0
        });
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);