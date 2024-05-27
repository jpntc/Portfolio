import React from "react";
import { CodeBracketIcon, EyeIcon, WindowIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, description, gitUrl, onClick }) => {
  return (
    <div className="">
      <div
        className="h-52 md:h-52rounded-t-xl relative group overflow-hidden rounded-t-xl "
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center ">
  
            <WindowIcon onClick={onClick} className="h-10 w-10 text-[#ADB7BE]  cursor-pointer hover:white absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  group-hover/link:text-white"></WindowIcon>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#282727] py-6 px-4 mb-3 h-40 md:h-56 ">
        <h5 className="tex-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-white h-40 inline-block">{description}</p>
      </div>

    </div>
  );
};

export default ProjectCard;



