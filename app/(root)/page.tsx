import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/public/serviceProvider.png";

export default function Home() {
  return (
    <>
      <section className=" bg-primary-50 bg-dotted-pattern bg-container py-10 md:py-[5rem]">
        <div className=" wrapper grid grid-cols-1 gap-10 md:grid-cols-2 2xl:gap-0 ">
          <div className="flex flex-col justify-center gap-5">
            <span className=" pr-10 max-w-md ">
              <p className=" text-xs text-primary border border-primary rounded-full  text-center py-1 px-3 justify-center">
                Welcome to Sri Lanka Largest Service Providing Platform.!
              </p>
            </span>
            <h1 className=" h1-bold md:text-left text-center ">
              Connect, Collaborate, and Engage your audience and Sell your
              Skill.
            </h1>
            <p className=" text-sm  md:p-regular-18 md:text-left text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis nisi suscipit, repudiandae consequatur accusamus omnis
            </p>
            <Button className=" sm:w-fit w-full " size="lg" asChild>
              <Link href="#events">Expore Now</Link>
            </Button>
          </div>
          <Image src={Hero} alt="Hero" />
        </div>
      </section>
      <section
        id="events"
        className=" wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className=" h2-bold">
          Trusted By
          <br /> Thousends of Service Provider
        </h2>
        <div className=" flex w-full flex-col gap-5 md:flex-row">
          Search Category
        </div>
      </section>
    </>
  );
}
