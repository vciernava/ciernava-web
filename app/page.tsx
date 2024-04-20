import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import CountingHeading from "./components/CountingHeading";
import HrefLink from "./components/Link";
const personalImage = require("./assets/MELP2883.JPG");

export default function Home() {
  return (
    <main className="min-h-screen container max-w-1600">
      <section className="section-hero" id="hero">
        <h1>Hi, my name is</h1>
        <h2>Viktor Čierňava.</h2>
        <h3>I build things for the web.</h3>
      </section>
      <section className="section section-col-2" id="about">
        <CountingHeading>About me</CountingHeading>
        <div className="inner">
          <div className="styled-about">
            <p>
              Hello! My name is Viktor and I enjoy creating and building things that live on the internet. My love for web development started back in 2018 when I decided to try editing simple WordPress themes — turns out hacking some custom functionalities together within a theme gives you a lot of opportunities.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="skills-list">
              <li><ChevronRightIcon /> Elixir</li>
              <li><ChevronRightIcon /> TypeScript</li>
              <li><ChevronRightIcon /> React</li>
              <li><ChevronRightIcon /> Yarn</li>
              <li><ChevronRightIcon /> Tailwind CSS</li>
              <li><ChevronRightIcon /> Wordpress</li>
            </ul>
          </div>
          <div className="styled-picture">
            <div className="wrapper">
              <Image src={personalImage} alt="Viktor Čierňava" />
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
