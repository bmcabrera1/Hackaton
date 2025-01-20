import { Link } from "react-router-dom"; // Importa el Link correcto de react-router-dom
import { MotionTransition } from "./transition-component";
import { socialNetworks } from "../utils/data";

const Header = () => {
  return (
    <MotionTransition
      position="bottom"
      className="absolute z-40 inline-block w-full top-5 md:top-10"
    >
      <header>
        <div className="container justify-between max-w-6xl mx-auto flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <h1 className="text-4xl font-bold text-center md:text-left">
              Box
              <span className="text-secondary">Time</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({ logo, src, id }) => (
              <a
                href={src}
                key={id}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}
              </a>
            ))}
          </div>
        </div>
      </header>
    </MotionTransition>
  );
};

export default Header;
