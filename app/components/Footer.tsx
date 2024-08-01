import Link from "next/link";
import HrefLink from "./Link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
    return (
        <footer className="relative flex items-center justify-center w-full py-[50px]" id="contact">
                      <div className="styled-float left">
            <div className="styled-socials">
              <ul>
                <li><HrefLink href="https://github.com/vciernava" className="after:hidden"><GitHubLogoIcon /></HrefLink></li>
                <li><HrefLink href="https://cz.linkedin.com/in/vciernava" className="after:hidden"><LinkedInLogoIcon /></HrefLink></li>
              </ul>
            </div>
          </div>
          <div className="styled-float right">
            <div className="styled-email">
              <HrefLink href="mailto:kontakt@viktorciernava.eu" className="after:hidden">kontakt@viktorciernava.eu</HrefLink>
            </div>
          </div>
            <Link href="https://github.com/vciernava/ciernava-web" className="text-center font-mono text-xs text-slate-300 hover:text-indigo-400 transition-colors duration-300 ease-in-out">
                Designed & build by Viktor Čierňava<br />
                with &#x3c;3 out of Czechia.
            </Link>
        </footer>
    )
}

export default Footer;