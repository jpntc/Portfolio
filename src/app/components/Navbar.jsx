"use client";
import React, { useState, useEffect } from "react";
import NavLink from "../components/NavLink";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      const targetId = event.target.getAttribute("href")?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const yOffset = -180; 
          const y =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
          event.preventDefault();
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#78b2b8] bg-opacity-100 border-b border-slate-200">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4  container  py-2 ">
        <div className=" w-20  md:w-28 lg:w-32">
          <Link href={"/"}>
            <Image
              src="/images/logo2.jpg"
              alt="NT Enhanced"
              quality={100}
              width={100}
              height={100}
              layout="intrinsic"
              className={"rounded-full"}
            />
          </Link>
        </div>

        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className=" flex items-center px-3 py-2 border rounded border-text-dark hover:text-primary-light hover:border-primary-light"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>
        <div className="menu hidden md:font-bold md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 flex-row md:flex-row md:space-x-8 mt-0  ">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="md:text-4xl text-text-dark hover:text-slate-100"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : <div></div>}
    </nav>
  );
};

export default Navbar;