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
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 ">
      <div>
        <h5 className="text-xl font-bold text-secondary-200 my-2">
          {" "}
          Connect with me
        </h5>
        <p className="text-[#ADB7B3] mb-4 max-w-md">
          I am currently seeking an internship or full-time opportunity to
          leverage what I have learn't and develop in an industry environment. I
          already have knowledge of software development methods and I am
          willing and eager to learn new tools as needed.
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
              height={10}
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
              className="text-secondary-200 bg-[#425ad4] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="johnsmith22@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Subject"
              className="text-secondary-200 block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="text-white bg-[#425ad4] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
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
              className="text-white bg-[#425ad4] border border-[#33353F] placeholder-[#9CA2A9] text-grey-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Chat about..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-slate-600  px-6 py-3 hover:bg-slate-600 rounded-full mt-3 w-full sm:w-fit bg-gradient-to-br  from-primary-100 via-secondary-300 to-primary-100 "
          >
            Send
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">Sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
