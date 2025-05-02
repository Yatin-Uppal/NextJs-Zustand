"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useCartStore } from '@/store/cartStore';
import CartItem from '@/components/cartItem';

const CartPage = () => {
  const { items, totalItems, totalPrice, clearCart } = useCartStore();
  
  const handleCheckout = () => {
    toast.success('Order placed successfully!');
    clearCart();
  };

  return (
    <main className="flex-1 container py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Your Shopping Cart</h1>
          <p className="text-muted-foreground mt-1">
            {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="h-24 w-24 rounded-full bg-cart-secondary flex items-center justify-center mb-6">
              <ShoppingCart className="h-12 w-12 text-cart-muted" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6 max-w-md">
              Looks like you haven't added any items to your cart yet.
              Browse our products and find something you'll love!
            </p>
            <Link href="/">
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" /> Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="p-6 space-y-4">
                  {items.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="pb-3">
                  <h2 className="text-xl font-semibold">Order Summary</h2>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Button 
                    className="w-full bg-cart-primary hover:bg-blue-700" 
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                  <Link href="/" className="w-full">
                    <Button variant="outline" className="w-full">
                      <ArrowLeft className="h-4 w-4 mr-2" /> Continue Shopping
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default CartPage;