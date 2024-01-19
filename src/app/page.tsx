/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0pLuo9tgyth
 */
import Link from "next/link";
import { ArrowRight, PersonStanding } from "lucide-react";
import Nav from "@/components/ui/Nav";
import About from "@/components/ui/about";
import Experience from "@/components/ui/Experience";

export default function Component() {
  return (
    <>
      <div className="relative w-full h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
        <Nav />
        <section className="flex-1 flex items-center justify-center">
          <div className="z-10 container px-4 md:px-6 flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="w-full md:w-1/2">
              <img
                alt="Jane Doe"
                className="w-full mt-12 h-full object-cover rounded-full"
                height="400"
                src="/free.jpeg"
                style={{
                  aspectRatio: "400/400",
                  objectFit: "cover",
                }}
                width="400"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left relative">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">
                This Nurse Writes!
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
                Freelance Nurse Writer
              </p>
              <Link
                className="inline-flex h-10 items-center mt-4 justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/articles"
              >
                View My Work <ArrowRight />
              </Link>
            </div>
          </div>
        </section>
        <p className="mt-12 ml-12 text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100">
          I write for your magazine.
        </p>
        <p className="text-xl mt-6 ml-12 md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300">
          As someone who as been in the healthcare industry for over 20 years, I
          understand medical issues, and can give a knowledgeable voice to your
          busines's content.
        </p>
        <hr className="m-24" />
        <About />
        <hr className="m-24" />
        <Experience />
      </div>
    </>
  );
}
