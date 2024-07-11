import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

export default function Footer() {
  return (
    <footer className=" border-t">
      <div className=" flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src={logo} width={128} height={38} alt="Binzez.lk Logo" />
        </Link>
        <p className=" text-sm font-semibold opacity-50">
          2024 Biznez.lk All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
