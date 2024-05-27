import React from 'react'
import Image from "next/image"
const Footer = () => {
  return (
    <footer className="footer flex justify-center border-t border-slate-400">
      <div className="md:text-xl text-black flex flex-col justify-center ">
        <span className="container p-4 flex  justify-evenly items-center w-80 ">
          <Image
            src="/images/logo2.jpg"
            alt="hero image ab"
            width={50}
            height={50}
            className="rounded-full overflow-hidden bg-transparent"
          />
          <p>All rights reserved.</p>
        </span>
      </div>
    
    </footer>
  );
}

export default Footer