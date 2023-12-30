import { Link } from "react-router-dom";
import Logo from "../assets/img/Logo 150 x 100.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#EAECF6] mt-4">
      <div className="max-w-7xl mx-auto p-4 md:p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 md:gap-10">
        <div className="w-full xl:col-span-2">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[100px]" />
          </Link>
          <p className="mt-4 text-sm">
            Computer Topia Online Store specializes in selling the latest
            Laptop, gadgets and electronics, catering to tech enthusiasts in
            Cambodia.
          </p>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4 text-[#5E17EB]">
            About Us
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Partners</Link>
            </li>
          </ul>
        </div>
        <div className="w-full xl:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-[#5E17EB]">
            Contact Us
          </h2>
          <span className="flex flex-col gap-2 text-sm">
            <p>
              Russian Federation Boulevard, Tek Laok 1, Toul Kork, Phnom Penh
            </p>
            <p>E-mail: mengsrun@computertopia.store</p>
            <p>Tel: 012 354 987</p>
          </span>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4 text-[#5E17EB]">Social</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link className="flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faFacebook} className="text-[#5E17EB]" />
                Facebook
              </Link>
            </li>
            <li>
              <Link className="flex flex-row items-center gap-2">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-[#5E17EB]"
                />
                Instagram
              </Link>
            </li>
            <li>
              <Link className="flex flex-row items-center gap-2">
                <FontAwesomeIcon icon={faTelegram} className="text-[#5E17EB]" />
                Telegram
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
