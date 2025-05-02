"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import MiniCart from './miniCart';

const Header: React.FC = () => {
  const [miniCartOpen, setMiniCartOpen] = useState(false);
  const { totalItems } = useCartStore();
  
  const toggleMiniCart = () => {
    setMiniCartOpen(!miniCartOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div>
          <Link href="/" className="flex items-center space-x-2 font-bold text-xl">
            <span>ShopCart</span>
          </Link>
        </div>
        <nav className="flex items-center gap-4">
          <div className="relative">
            <Button 
              variant="outline" 
              size="icon" 
              className="relative"
              onClick={toggleMiniCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
            {miniCartOpen && <MiniCart onClose={toggleMiniCart} />}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;