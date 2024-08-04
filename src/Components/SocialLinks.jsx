import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

function SocialLinks() {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a
        href="https://github.com/GalinaHussey"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faGithub}
        />
      </a>
      <a href="mailto:galinahussey@gmail.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faEnvelope}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/galina-hussey-8365a231b/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faLinkedin}
        />
      </a>
    </div>
  );
}

export default SocialLinks;
