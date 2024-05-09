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

interface StickerCardProps {
  sticker: Sticker;
}
const StickerCard: FC<StickerCardProps> = ({ sticker }) => {
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
      <CardFooter className="text-sm text-muted-foreground justify-end">{`$${sticker.price}`}</CardFooter>
    </Card>
  );
};

export default StickerCard;
