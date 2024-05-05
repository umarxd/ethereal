import { Icons } from "@/components/Icons";

export default function Home() {
  return (
    <div className="rounded-md  flex flex-col justify-center items-center gap-12 sm:mt-10">
      <h1 className="text-xl sm:text-2xl text-center font-bold">
        <span className="text-teal-500  font-extrabold">Ethereal</span> offers
        you a rich catalog of beautiful handmade stickers.
      </h1>
      <div className="grid grid-cols-2 sm:flex">
        <Icons.stickerTree className="w-20 h-20" />
        <Icons.stickerHamburger className="w-20 h-20" />
        <Icons.stickerDoubleHelix className="w-20 h-20" />
        <Icons.stickerIcecream className="w-20 h-20" />
      </div>

      <div className="">
        Welcome to our sticker wonderland, where creativity knows no bounds!
        Dive into our kaleidoscope of designs, from whimsical characters to
        intricate patterns, each sticker telling its own unique story. Whether
        you're decking out your laptop, water bottle, or notebook, our
        high-quality stickers are here to accompany you on every adventure.
        Explore our collection today and let your imagination run wild!
      </div>
    </div>
  );
}
