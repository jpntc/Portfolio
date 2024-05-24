import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden "
        style={{ background: `url(${imgUrl})`,  }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center ">
          <Link
            href={`${gitUrl}`}
            className="h-14 w-14 border-2 display:flex align-middle  rounded-full border-[#ADB7BE] hover:border-white group/link  "
            target={"_blank"}
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE]  cursor-pointer hover:white absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2  group-hover/link:text-white"></CodeBracketIcon>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#282727] py-6 px-4 mb-3">
        <h5 className="tex-xl font-semibold mb-2 ">{title}</h5>
        <p className="text-white h-40 inline-block">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;



