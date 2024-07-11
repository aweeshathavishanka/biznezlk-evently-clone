"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathname = usePathname();
  return (
    <nav>
      <ul className=" md:flex-between flex w-full flex-col items-start gap-10 md:gap-5 md:flex-row">
        {headerLinks.map((link) => {
          const isActive = pathname === link.route;
          return (
            <li
              className={`${
                isActive && "text-primary"
              } flex-center p-medium-16 whitespace-nowrap`}
              key={link.route}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
