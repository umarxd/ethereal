import { Icons } from "./Icons";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full z-[90] bg-teal-900 text-white py-2 text-center">
      <div className="hidden sm:block">
        <Icons.logo className="h-8 w-auto mx-auto" />
        <div className="max-w-xs mx-auto">
          <p className=" text-xs text-muted-foreground">Ethereal</p>
        </div>
      </div>
      <div className="block sm:hidden">
        <Icons.logo className="h-8 w-auto mx-auto" />
      </div>
      <div className="hidden sm:block py-1 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
