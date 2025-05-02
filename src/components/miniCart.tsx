"use client";

import React from 'react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { Button } from '@/components/ui/button';
import { ShoppingCart, X } from 'lucide-react';

interface MiniCartProps {
  onClose: () => void;
}

const MiniCart: React.FC<MiniCartProps> = ({ onClose }) => {
  const { items, totalItems, totalPrice, removeItem } = useCartStore();

  return (
    <div className="absolute top-full right-0 mt-2 w-80 bg-white border rounded-lg shadow-lg z-50 overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold">Your Cart ({totalItems})</h3>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X className="h-4 w-4" />
        </button>
      </div>
      
      <div className="max-h-80 overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-4 text-center">
            <div className="flex justify-center mb-2">
              <ShoppingCart className="h-8 w-8 text-gray-300" />
            </div>
            <p className="text-gray-500">Your cart is empty</p>
          </div>
        ) : (
          <div>
            {items.map((item) => (
              <div key={item.product.id} className="p-3 border-b flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center mr-3">
                    <span className="text-xs">{item.product.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{item.product.name}</p>
                    <div className="text-xs text-gray-500">
                      <span>${item.product.price.toFixed(2)} × {item.quantity}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => removeItem(item.product.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <div className="p-4 border-t">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="space-y-2">
          <Link href="/cart" className="block w-full" onClick={onClose}>
            <Button className="w-full" variant="outline">View Cart</Button>
          </Link>
          <Button className="w-full" disabled={items.length === 0}>
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;