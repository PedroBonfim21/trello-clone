import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const logoFont = localFont({
  src: "../public/fonts/font.woff2"
});


export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Image  
        src="/logo.svg"
        alt="Taskify Logo"
        height={30}
        width={30}
        />
        <p className={cn(
          "text-lg text-neutral-700 pt-1",
          logoFont.className
          )}>
          Taskify
        </p>
      </div>
    </Link>
  );
}