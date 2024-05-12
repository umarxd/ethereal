import { FC } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Sticker } from "@/types/stickerType";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { toast } from "./ui/use-toast";

interface StickerCardProps {
  sticker: Sticker;
}
const StickerCard: FC<StickerCardProps> = ({ sticker }) => {
  const { items, addItem } = useCart();

  const addToCart = (sticker: Sticker) => {
    if (items.some((item) => item.sticker.id === sticker.id)) {
      toast({
        description: "This sticker has already added to your cart.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Sticker added to your cart.",
        variant: "default",
      });
      addItem(sticker);
    }
  };

  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle className="text-base">{sticker.title}</CardTitle>
        <CardDescription className="text-xs">
          {sticker.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center items-center">
        <Image
          width={180}
          height={180}
          alt="sticker image"
          src={sticker.image}
        />
      </CardContent>
      <Button
        onClick={() => addToCart(sticker)}
        className={buttonVariants({
          variant: "outline",
          className: "cursor-pointer",
        })}
      >
        Add to cart
      </Button>
      <CardFooter className="text-sm text-muted-foreground justify-end">{`$${sticker.price}`}</CardFooter>
    </Card>
  );
};

export default StickerCard;
