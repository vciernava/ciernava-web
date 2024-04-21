"use client";

import { ChevronRightIcon } from "@radix-ui/react-icons";
import CountingHeading from "./components/CountingHeading";
import HrefLink from "./components/Link";
import Image from "next/image";
import profilePic from './assets/MELP2883.jpg';
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="min-h-screen container max-w-1600">
      <section className="section-hero" id="hero">
          <h1>Hi, my name is</h1>
          <h2>Viktor Čierňava. ✌️</h2>
          <h3>I build things for the web.</h3>
          <p className="mt-8 mb-16 w-[500px]">I'm a software engineer out of Czech Republic specializing in building and designing exceptional digital experiences. Currently I am focused on building accessible products for business owners.</p>
          <Button href="/">Checkout my GitHub!</Button>
      </section>
      <section className="section section-col-2" id="about">
        <CountingHeading>About me</CountingHeading>
        <div className="inner">
          <div className="styled-about">
            <p>
              Hello! My name is Viktor and I enjoy creating and building things that live on the internet. My love for web development started back in 2018 when I decided to try editing simple WordPress themes — turns out hacking some custom functionalities together within a theme gives you a lot of opportunities.
            </p>
            <p>
              Fast-forward to today, and I have the privilege to work at <HrefLink href="https://gamerhost.pro">an game hosting company</HrefLink>, <HrefLink href="https://etf2l.org">a esports community</HrefLink>, and <HrefLink href="https://tf2center.com">a small gaming community</HrefLink>.
            </p>
            <p>Let talk a little bit personal, I have a lot of hobbies. One of them is learning new languages, like Japanese, Swedish and Spanish! I also like to play video games and watch videos about new technologies.</p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="skills-list">
              <li><ChevronRightIcon /> Elixir</li>
              <li><ChevronRightIcon /> TypeScript</li>
              <li><ChevronRightIcon /> React</li>
              <li><ChevronRightIcon /> Yarn</li>
              <li><ChevronRightIcon /> Tailwind CSS</li>
              <li><ChevronRightIcon /> WordPress</li>
            </ul>
          </div>
          <div className="styled-picture">
            <div className="wrapper">
              <Image
                src={profilePic}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="experience">
        <CountingHeading>Where I've Worked</CountingHeading>
        <div className="inner">
          
        </div>
      </section>
      <section className="section" id="projects">
        <CountingHeading>Some Things I've Build</CountingHeading>
        <div className="inner">
          
        </div>
      </section>
    </main>
  );
}
