"use client";

import { ShoppingBagIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { useState } from "react";
import CartItem from "./CartItem";
import { useCart } from "@/hooks/use-cart";
import { ScrollArea } from "./ui/scroll-area";

const Cart = () => {
  const { items } = useCart();

  const cartTotal = items
    .reduce((total, { sticker }) => total + sticker.price, 0)
    .toFixed(2);

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingBagIcon className="h-6 w-6 flex flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {items.length}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>{`Cart (${items.length})`}</SheetTitle>
        </SheetHeader>
        {items.length > 0 ? (
          <>
            <div className="flex w-full flex-col pr-6">
              <ScrollArea className="w-full h-[300px] sm:h-[500px] px-6 rounded-md border border-gray-400">
                {items.map((item, index) => (
                  <CartItem item={item.sticker} index={index} key={index} />
                ))}
              </ScrollArea>
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm">
                <div className="flex">
                  <span className="flex-1"> Total</span>
                  <span>{`$${cartTotal}`}</span>
                </div>
              </div>
              <SheetFooter>
                <SheetTrigger asChild>
                  <Link
                    href="/cart"
                    className={buttonVariants({ className: "w-full" })}
                  >
                    Continue to Checkout
                  </Link>
                </SheetTrigger>
              </SheetFooter>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
              <Image src="/logo-bird.png" fill alt="empty shopping cart bird" />
            </div>
            <div className="text-xl font-semibold">Your cart is empty</div>
            <SheetTrigger asChild>
              <Link
                href="/products"
                className={buttonVariants({
                  variant: "link",
                  size: "sm",
                  className: "text-sm text-muted-foreground",
                })}
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
