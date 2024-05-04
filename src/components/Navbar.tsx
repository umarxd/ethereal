import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icons } from "./Icons";
import UserAccountNav from "./UserAccountNav";
import { getAuthSession } from "@/lib/auth";

const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-10 w-10 sm:h-8 sm:w-8" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Ethereal
          </p>
        </Link>

        <div className="flex gap-2">
          <Link
            href="/products"
            className={buttonVariants({ variant: "outline" })}
          >
            Products
          </Link>

          {session?.user ? (
            <UserAccountNav user={session.user} />
          ) : (
            <Link href="/sign-in" className={buttonVariants()}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
