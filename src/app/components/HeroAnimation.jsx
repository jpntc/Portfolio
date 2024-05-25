import React from "react";
import Image from "next/image";

const HeroAnimation = () => {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="flex rounded-full text-center justify-center align-center bg-gradient-to-r w-32 h-32 from-slate-300 to-stone-400 p-3 ">
          <Image
            src="/images/tech-stack-images/py.png"
            width={130}
            height={130}
          ></Image>
        </div>
        <div className="flex rounded-full text-center justify-center  bg-gradient-to-r w-32 h-32 from-slate-300 to-stone-400 p-3">
          <Image
            src="/images/tech-stack-images/js.png"
            height={100}
            width={190}
          ></Image>
        </div>
        <div className="flex rounded-full text-center justify-center align-  bg-gradient-to-r w-32 h-32 from-slate-300 to-stone-600 p-3">
          <Image
            src="/images/tech-stack-images/ts.png"
            width={130}
            height={130}
          ></Image>
        </div>
        <div className="flex rounded-full text-center justify-center align-  bg-gradient-to-r w-32 h-32 from-slate-300 to-stone-600 p-3">
          <Image
            src="/images/tech-stack-images/jv.png"
            width={130}
            height={130}
          ></Image>
        </div>
        <div className="flex rounded-full text-center justify-center align-  bg-gradient-to-r w-32 h-32 from-slate-300 to-stone-600 p-3">
          <Image
            src="/images/tech-stack-images/cpp.png"
            width={130}
            height={130}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default HeroAnimation;
