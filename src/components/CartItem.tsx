"use client";

import { Sticker } from "@/types/stickerType";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import { useCart } from "@/hooks/use-cart";

interface CartItemProps {
  item: Sticker;
  index: number;
}

const CartItem: FC<CartItemProps> = ({ item, index }) => {
  const { removeItem } = useCart();

  return (
    <div className="flex justify-between items-center">
      <div>
        <h2 className="font-bold">{item.title}</h2>
        <h4 className="text-muted-foreground text-sm">{`$${item.price}`}</h4>
      </div>

      <div className="flex items-center gap-6">
        <Image width={90} height={90} alt="sticker image" src={item.image} />

        <Icons.delete
          className="hover:cursor-pointer"
          onClick={() => removeItem(item.id)}
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default CartItem;
