"use client";

import { usePathname } from "next/navigation";
import { Icons } from "./Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-teal-900 text-white py-4 text-center">
      <div className="hidden sm:block">
        <Icons.logo className="h-8 w-auto mx-auto" />
        <div className="max-w-xs mx-auto">
          <p className=" text-xs text-muted-foreground">Ethereal</p>
        </div>
      </div>
      <div className="block sm:hidden">
        <Icons.logo className="h-8 w-auto mx-auto" />
      </div>
      <div className="hidden sm:block py-2 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
