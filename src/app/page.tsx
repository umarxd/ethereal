import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="rounded-md text-center flex flex-col justify-center items-center gap-12  sm:mt-24">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-2xl tracking-tight sm:text-3xl font-semibold">
          <span className="text-teal-500 font-bold">Ethereal</span> offers you a
          rich catalog of beautiful handmade stickers.
        </h1>
        <div className="grid grid-cols-2 sm:flex">
          <Icons.stickerTree className="w-20 h-20" />
          <Icons.stickerHamburger className="w-20 h-20" />
          <Icons.stickerDoubleHelix className="w-20 h-20" />
          <Icons.stickerIcecream className="w-20 h-20" />
        </div>
      </div>
      <div className="text-lg text-muted-foreground">
        Welcome to our sticker wonderland, where creativity knows no bounds!
        Dive into our kaleidoscope of designs, from whimsical characters to
        intricate patterns, each sticker telling its own unique story. Whether
        you're decking out your laptop, water bottle, or notebook, our
        high-quality stickers are here to accompany you on every adventure.
        Explore our collection today and let your imagination run wild!
      </div>

      <Link href="/products" className={buttonVariants({})}>
        Browse Stickers
      </Link>
    </div>
  );
}
