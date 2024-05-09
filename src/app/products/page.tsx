"use client";

import StickerCard from "@/components/StickerCard";
import stickerData from "../../util/PlaceholderStickersData";

const Products = ({}) => {
  return (
    <div className="grid  md:grid-cols-4 gap-y-4 gap-x-4">
      {stickerData.map((sticker, index) => (
        <StickerCard key={index} sticker={sticker} />
      ))}
    </div>
  );
};

export default Products;