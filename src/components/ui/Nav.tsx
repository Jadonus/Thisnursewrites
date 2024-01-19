"use client";
import React, { useState, useEffect } from "react";

import { StethoscopeIcon, UserRound } from "lucide-react";
import Link from "next/link";
import { Menu } from "lucide-react";
export default function Nav() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [showHam, setShowHam] = useState(false);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 768;

  return (
    <>
      <nav className="z-20 px-4 md:px-6 py-2 flex items-center top-0 sticky backdrop-blur-xl  justify-between">
        <div className="flex items-center space-x-2">
          {" "}
          <StethoscopeIcon />
          <a
            className="text-lg md:text-xl lg:text-2xl font-bold dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
            href="/"
          >
            TNW
          </a>
        </div>
        {!isMobile ? (
          <div className="flex space-x-4">
            <Link
              className="text-lg md:text-xl lg:text-2xl  hover:text-gray-900 dark:hover:text-gray-100"
              href="#"
            >
              About Me
            </Link>
            <Link
              className="text-lg md:text-xl lg:text-2xl  hover:text-gray-900 dark:hover:text-gray-100"
              href="#"
            >
              Articles
            </Link>
          </div>
        ) : (
          <button onClick={() => setShowHam(!showHam)}>
            {" "}
            <Menu />{" "}
          </button>
        )}
      </nav>
      {showHam ? (
        <div className="h-screen flex flex-col justify-center items-center">
          <Link
            className="text-4xl m-12 hover:text-gray-900 dark:hover:text-gray-100"
            href="#"
          >
            About Me
          </Link>
          <Link
            className="text-4xl m-12 hover:text-gray-900 dark:hover:text-gray-100"
            href="/articles"
          >
            Articles
          </Link>
        </div>
      ) : null}
    </>
  );
}
