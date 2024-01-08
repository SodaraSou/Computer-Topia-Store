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
      <div className="max-w-7xl mx-auto p-4 md:py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-10">
        <div className="w-full flex flex-col items-center md:flex-row md:items-start">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          {/* <p className="mt-4 text-sm">
            Computer Topia Online Store specializes in selling the latest
            Laptop, gadgets and electronics, catering to tech enthusiasts in
            Cambodia.
          </p> */}
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
              <Link>Partners</Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-semibold mb-4 text-[#5E17EB]">
            Contact Us
          </h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>E-mail: mengsrun@gmail.store</li>
            <li>Telegram: 012 354 987</li>
            <li>Tel: 012 354 987</li>
          </ul>
        </div>
        <div className="w-full flex xl:justify-center">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-[#5E17EB]">
              Social
            </h2>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link className="flex flex-row items-center gap-2">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-[#5E17EB]"
                  />
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
                  <FontAwesomeIcon
                    icon={faTelegram}
                    className="text-[#5E17EB]"
                  />
                  Telegram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto p-4">
          <p className="text-center text-sm">
            © 2024, Computer Topia Online Store. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
