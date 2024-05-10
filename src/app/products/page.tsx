"use client";

import StickerCard from "@/components/StickerCard";
import stickerData from "../../util/PlaceholderStickersData";

const Products = ({}) => {
  return (
    <div className="container grid md:grid-cols-4 gap-y-4 gap-x-4">
      {stickerData.map((sticker, index) => (
        <StickerCard sticker={sticker} key={index} />
      ))}
    </div>
  );
};

export default Products;
