import React from "react";
import Head from "next/head";
import AboutImg from "../../public/images/about.jpg";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Any Description"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose! "
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-6 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Hi, Im Bharath Raj, a web developer and UI/UX designer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. I am always looking for new
                and innovative ways to bring my visions to life.
              </p>
              <p className="font-medium my-5 ">
                I believe that design is about more than just making things look
                pretty, its about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether Im working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8  dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={AboutImg}
                alt=""
                className="w-full h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 "
                priority
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw"
              />
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
