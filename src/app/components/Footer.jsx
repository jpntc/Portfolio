import React from 'react'
import Image from "next/image"
const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F]">
        <div className="md:text-xl text-white flex justify-center " >
            <span className="container p-12 flex  justify-evenly items-center w-96 ">
                    <Image src="/images/logo2.jpg" 
                    alt="hero image ab" 
                    width={50} 
                    height={50}
                    className="rounded-full overflow-hidden bg-transparent"
                    />
                        <p>All rights reserved.</p>
            </span>
        </div>
    </footer>
  )
}

export default Footer