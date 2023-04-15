import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/food.png";
import Project2 from "../../public/images/projects/ecommerce.png";
import Project3 from "../../public/images/projects/netflix.png";
import Project4 from "../../public/images/projects/videochat.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full h-auto flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light relative lg:flex-col lg:p-8 xs:roounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center ">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light pt-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full h-auto flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>

        <div className=" w-full mt-2 flex items-center justify-between ">
          <Link
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta name="description" content="Any Description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full h-auto mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12 ">
              <FeaturedProject
                title="Food Delivery Application"
                img={Project1}
                summary="A feature-rich Food Delivery application using React, Tailwind CSS, React Router and Firebase. It shows details of different food categories and user can easily place the order. "
                link="https://bharathraj73.github.io/Food_Delivery/"
                github="https://github.com/BharathRaj73/Food_Delivery"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 md:col-span-12">
              <Project
                title="E-Commerce Website"
                img={Project2}
                link="/"
                github="https://github.com/BharathRaj73/Ecommerce"
                type="Project"
              />
            </div>

            <div className="col-span-6 md:col-span-12">
              <Project
                title="VideoChat Application"
                img={Project4}
                link="https://video-chat-jhr02z9gy-bharathraj73.vercel.app/"
                github="https://github.com/BharathRaj73/VideoChat-Application"
                type="Project"
              />
            </div>

            <div className="col-span-12 ">
              <FeaturedProject
                title="Netflix Application"
                img={Project3}
                summary="A Netflix application using React, Tailwind CSS, React Router, Context API and Firebase offering a wide variety of TV shows, movies, anime, documentaries and more."
                link="https://bharathraj73.github.io/Netflix/"
                github="https://github.com/BharathRaj73/Netflix"
                type="Featured Project"
              />
            </div>
            {/* <div className="col-span-6 md:col-span-12">Project-3</div>
            <div className="col-span-6 md:col-span-12">Project-4</div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
