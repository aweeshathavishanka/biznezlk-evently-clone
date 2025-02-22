import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNavItems from "./MobileNavItems";

export default function Header() {
  return (
    <header className=" w-full border-b">
      <div className=" wrapper flex items-center  justify-between">
        <Link href="/" className=" w-36">
          <Image src={logo} alt="Biznez.lk Logo" width={128} height={38} />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>
        <div className=" flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNavItems />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-lg" size="lg">
              <Link href="/sign-in">Log In</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
}
