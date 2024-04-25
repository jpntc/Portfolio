"use client"
import React, {useState} from 'react'
import NavLink from "../components/NavLink"
import Link from "next/link"
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },{
    title: "Contact",
    path: "#contact",
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
   <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100 border border-grey-300">
    <div className="flex flex-wrap items-center justify-between mx-auto px-4 sm:p-0 container lg:py-4 ">
        <Link href={"/"}>
          <Image src="/images/logo2.jpg" alt="NT Enhanced" quality={100} width={130} height={130} layout="intrinsic" className={"rounded-3xl"}/>
        </Link>
        
        <div className="mobile-menu block md:hidden">
       <button onClick={()=>(setNavbarOpen (!(navbarOpen)))} className=" flex items-center px-3 py-2 border rounded border-primary-200 text-secondary-200 hover:text-teritary-300 hover:border-white">
         {
          navbarOpen?(
            <XMarkIcon className="h-5 w-5"/>
          ):(
            <Bars3Icon className="h-5 w-5"/>

          )
          }
       </button>
        </div>
        <div className="menu hidden  md:block md:w-auto" id="navbar te">
          <ul className="flex p-4 md:p-0 flex-row md:flex-row md:space-x-8 mt-0  ">
              {
              navLinks.map((link, index)=>(
                <li key={index}>
                  {/* <NavLink href={link.path}title={link.title} style={{color: 'green'}}></NavLink> */}
                  <a href={link.path} className={"text-secondary-100 md:text-3xl"} visited={"text-primary-800"}>
                    {link.title}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
    {
          navbarOpen ? (<MenuOverlay links = {navLinks}/>
            ):(
              <div></div>
            )
    }
   </nav>
);
}

export default Navbar