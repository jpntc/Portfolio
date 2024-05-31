"use client";
import { React, useState, useRef  } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);

    const resData = await response.json();
    console.log(resData);
    console.log(response);
    if (response.status === 200) {
      setEmailSubmitted(true);
    } else {
      console.log(response.status);
      console.log("Message not sent");
    }
  };

  return (
    <>
      <motion.section
        id="contact"
        ref={ref}
        initial={{ opacity: 0}}
        animate={isInView ? { opacity: 1, x: 0 } :{opacity: 0, x: -150}}
        transition={{ duration: 1.0 }}
        className="grid md:grid-cols-2 my-12 md:my-8 py-24 gap-4 "
      >
        <div className="">
          <h5 className=" text-4xl md:text-5xl xl:text-6xl  text-text-dark  font-bold mb-8">
            {" "}
            Connect with me
          </h5>
          <p className="text-text-light mb-8 max-w-md text-xl xl:text-2xl">
            {/* I am currently seeking an internship or full-time opportunity to
            leverage what I have learn't and develop in an industry environment.
            I already have knowledge of software development methods and I am
            willing and eager to learn new tools as needed. */}
            Currently seeking opportunities to learn skills, work with
            professionals, and dive into the software engineering industry.
            Knowledge of many of the different software engineering
            methodologies including Agile & Spiral development processes. Soft
            skills include teamwork and constructive criticism evaluation.
          </p>
          <div className=" flex gap-20 ">
            <Link href="https://github.com/jpntc">
              <Image
                src="/images/github-logo.png"
                alt="github-logo"
                quality={100}
                width={100}
                height={100}
                layout="intrinsic"
                className={"rounded-full w-20 h-20 "}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/jude-pierre/">
              <Image
                src="/images/linkedin-logo.png"
                alt="github-logo"
                quality={100}
                width={100}
                height={100}
                layout="intrinsic"
                className={"w-20 h-20 mt-1"}
              />
            </Link>
          </div>
        </div>
        <div className="">
          <form className="flex flex-col " onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className=" text-text-dark font-semibold block mb-2 text-xl xl:text-2xl "
              >
                Enter your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className=" bg-[#4e6cff] border-[#33353F] placeholder-white text-white text-lg rounded-lg block w-full p-2.5"
                placeholder="johnsmith22@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Subject"
                className="   text-text-dark font-semibold block mb-2 text-xl xl:text-2xl"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className=" bg-[#4e6cff] border border-[#030304] placeholder-white text-white  text-lg rounded-lg block w-full p-2.5"
                placeholder="Saying hello"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Message"
                className="  text-text-dark font-semibold block mb-2 text-xl xl:text-2xl"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                type="text"
                className=" bg-[#4e6cff] border border-[#09090a] placeholder-white text-white text-lg rounded-lg block w-full p-2.5"
                placeholder="Chat about..."
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="text-text-light text-xl px-6 py-3 hover:bg-slate-100 hover:text-black rounded-full mt-3 w-full sm:w-fit bg-text-dark "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
            {emailSubmitted && (
              <p className="text-green-500 text-lg mt-2">Sent successfully!</p>
            )}
          </form>
        </div>
      </motion.section>
    </>
  );
};

export default EmailSection;
