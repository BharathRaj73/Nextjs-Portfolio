import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ContactImg from "../components/contact.json";
import Lottie from "lottie-react";
import TransitionEffect from "@/components/TransitionEffect";

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nuds6uh",
        "template_wqxi52c",
        form.current,
        "TN-JTD3xCqOYhfdIp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <section className=" min-h-screen flex items-center justify-center">
        <Layout>
          <TransitionEffect />
          <AnimatedText
            text="Love to hear from you "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 dark:bg-dark/75"
          />
          <div className="bg-gray-100 rounded-2xl shadow-lg w-full p-5 h-full grid items-center justify-center pl-10 grid-cols-8 gap-16 sm:gap-8 dark:bg-dark/50 dark:text-light dark:border dark:border-light">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="font-bold text-2xl mb-12 dark:text-light">
                Get In Touch 👋
              </h2>
              <form ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="user_name"
                  className="border-b-2 w-[80%] mb-8 p-1 border-b-dark placeholder:text-dark placeholder:opacity-80 text-lg bg-slate-100 text-dark focus:outline-none rounded-md"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="user_email"
                  className="border-b-2 w-[80%] mb-8 p-1 border-b-dark placeholder:text-dark placeholder:opacity-80 text-lg bg-slate-100 text-dark focus:outline-none rounded-md"
                  required
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="border-b-2 w-[80%] mb-8 p-1 border-b-dark placeholder:text-dark placeholder:opacity-80 text-lg bg-slate-100 text-dark focus:outline-none rounded-md"
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder="Write me a message"
                  rows={4}
                  cols={40}
                  className="border-b-2 w-[80%] mb-8 p-1 border-b-dark placeholder:text-dark placeholder:opacity-80 text-lg bg-slate-100 text-dark focus:outline-none rounded-md"
                ></textarea>
                <button
                  type="submit"
                  className="m-auto w-[60%] text-center border bg-dark rounded-full py-1 mt-6 text-lg font-bold tracking-wide uppercase text-white brightness-105 hover:bg-blue-500 hover:text-dark md:w-[90%] items-center"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <Lottie
                animationData={ContactImg}
                className="w-full h-full md:w-full sm:w-full "
              />
            </div>
          </div>
        </Layout>
      </section>
    </div>
  );
};

export default contact;
