"use client";
import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

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
      <section
        id="contact"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 "
      >
        <div>
          <h5 className="text-xl font-bold text-secondary-200 my-2">
            {" "}
            Connect with me
          </h5>
          <p className="text-primary mb-4 max-w-md  text ">
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
          <div className="socials flex flex-row gap-20 ">
            <Link href="https://github.com/jpntc">
              <Image
                src="/images/github-logo.png"
                alt="github-logo"
                quality={100}
                width={100}
                height={100}
                layout="intrinsic"
                className={"rounded-full"}
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
                className={""}
              />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-secondary-200 block mb-2 text-sm font-medium"
              >
                Enter your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className=" bg-[#4e6cff] border border-[#33353F] placeholder-primary text-primary text-sm rounded-lg block w-full p-2.5"
                placeholder="johnsmith22@google.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Subject"
                className=" text-primary block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className=" bg-[#4e6cff] border border-[#030304] placeholder-primary text-primary text-sm rounded-lg block w-full p-2.5"
                placeholder="Saying hello"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Message"
                className="text-secondary-200 block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                type="text"
                className=" bg-[#4e6cff] border border-[#09090a] placeholder-primary text-primary text-sm rounded-lg block w-full p-2.5"
                placeholder="Chat about..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="text-white  px-6 py-3 hover:bg-white hover:text-black rounded-full mt-3 w-full sm:w-fit bg-slate-400 "
            >
              Send
            </button>
            {emailSubmitted && (
              <p className="text-green-500 text-sm mt-2">Sent successfully!</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default EmailSection;
