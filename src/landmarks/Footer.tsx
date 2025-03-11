import GithubLogo from "/assets/images/icons/github.png";
import LinkedInLogo from "/assets/images/icons/linkedin.png";
import MailLogo from "/assets/images/icons/email.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="connect">
      <ul className="connect__list" role="list">
        <li>
          <a
            href="https://github.com/KapteynUniverse"
            key="github"
            aria-label="Link leading to Asilcan Toper's GitHub Profile"
            target="_blank"
          >
            <img
              src={GithubLogo}
              width={64}
              height={64}
              alt="Github Logo"
              aria-hidden="true"
            />
          </a>
        </li>
        <li>
          {" "}
          <a
            href="https://www.linkedin.com/in/asilcan-toper-46a437207/"
            key="linkedin"
            aria-label="Link leading to Asilcan Toper's LinkedIn Profile"
            target="_blank"
          >
            <img
              src={LinkedInLogo}
              width={64}
              height={64}
              alt="Linkedin Logo"
              aria-hidden="true"
            />
          </a>
        </li>
        <li>
          {" "}
          <a
            href="mailto:asilcantoper@gmail.com"
            key="email"
            aria-label="Click to send an email to Asilcan Toper"
            target="_blank"
          >
            <img
              src={MailLogo}
              width={64}
              height={64}
              alt="Mail Logo"
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
      <p id="copyright" className="text-textBlack text-sm">
        Copyright © Asilcan Toper {currentYear}
      </p>
    </footer>
  );
}

export default Footer;
