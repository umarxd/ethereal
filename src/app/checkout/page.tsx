"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  const { items } = useCart();

  const cartTotal = items
    .reduce((total, { sticker }) => total + sticker.price, 0)
    .toFixed(2);

  return (
    <div className="max-w-md mx-auto border border-gray-300 rounded-md shadow-md p-2">
      {items.map((item, index) => (
        <div className="flex items-center justify-between" key={index}>
          <div className="flex items-center">
            <div className="w-16 h-16 mr-2">
              <Image
                className="rounded"
                width={90}
                height={90}
                objectFit="cover"
                alt="sticker image"
                src={item.sticker.image}
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{item.sticker.title}</h2>
            </div>
          </div>
          <div>
            <h4 className="text-sm text-gray-600">{`$${item.sticker.price}`}</h4>
          </div>
        </div>
      ))}
      <Separator />
      <div className="flex justify-between font-bold m-2">
        <h2 className="">Total:</h2>
        <h4>{`$${cartTotal}`}</h4>
      </div>

      <Button disabled className={buttonVariants({ className: "w-full" })}>
        Checkout
      </Button>
    </div>
  );
};

export default Checkout;
