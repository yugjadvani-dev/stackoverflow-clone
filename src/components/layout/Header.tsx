"use client";

import { SquareStackIcon } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "../mode-toggle";
import { FloatingDockDemo } from "../floating-dock-demo";

const Header = () => {
  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center border">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <SquareStackIcon className="h-6 w-6" />
          <span className="font-bold text-lg">Stack Overflow</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <ModeToggle />
        </nav>
      </header>

      <FloatingDockDemo />
    </>
  );
};

export default Header;
