import CountingHeading from "./components/CountingHeading";
import HrefLink from "./components/Link";

export default function Home() {
  return (
    <main className="min-h-screen container">
      <section id="about">
        <CountingHeading>About me</CountingHeading>
        <div className="inner">
        <p>Lorem ipsum, dolor sit amet <HrefLink href="https://google.com">consectetur</HrefLink> adipisicing elit. Ea nisi sequi sit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum facilis deserunt voluptatum numquam iste incidunt modi debitis minima quia laudantium.</p>
        </div>
      </section>
    </main>
  );
}
