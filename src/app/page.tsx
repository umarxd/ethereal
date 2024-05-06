import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="rounded-md text-center flex flex-col justify-center items-center gap-12 sm:gap-16 sm:mt-24">
      <h1 className="text-xl tracking-tight sm:text-3xl font-semibold">
        <span className="text-teal-500 font-bold">Ethereal</span> offers you a
        rich catalog of beautiful handmade stickers.
      </h1>
      <div className="grid grid-cols-2 sm:flex">
        <Icons.stickerTree className="w-20 h-20" />
        <Icons.stickerHamburger className="w-20 h-20" />
        <Icons.stickerDoubleHelix className="w-20 h-20" />
        <Icons.stickerIcecream className="w-20 h-20" />
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

{
  /* 
 <div>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality{" "}
          <span className="text-blue-600">digital assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Welcome to DigitalHippo. Every asset on our platform is verified by
          our team to ensure our highest quality standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()}>
            Browse Trending
          </Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>

      <section className="border-t border-gray-200 bg-gray-50">
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0"></div>
      </section>
    </div>
*/
}
