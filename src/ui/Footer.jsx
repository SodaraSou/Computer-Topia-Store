import { Link } from "react-router-dom";

import facebookSvg from "../assets/svg/facebook.svg";
import instagramSvg from "../assets/svg/instagram.svg";
import telegramSvg from "../assets/svg/telegram.svg";
import xSvg from "../assets/svg/x-twitter.svg";
import Logo from "../assets/img/Logo 150 x 100.png";

function Footer() {
  return (
    <footer className="bg-[#EAECF6]">
      <div className="max-w-7xl mx-auto p-4 xl:py-10 xl:px-0 flex flex-col md:flex-row gap-10 h-[400px]">
        <div className="w-full md:w-2/5">
          {/* <h1 className="text-4xl font-bold mb-10">Logo</h1> */}
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <p className="text-lg mt-10">
            This e-commerce store specializes in selling the latest technology
            gadgets and electronics, catering to tech enthusiasts in Cambodia.
          </p>
        </div>
        <div className="w-full md:w-3/5 flex flex-col md:flex-row gap-4">
          <div className="w-1/4">
            <h2 className="text-2xl font-semibold mb-10">Brand</h2>
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <Link>Apple</Link>
              </li>
              <li>
                <Link>Asus</Link>
              </li>
              <li>
                <Link>Dell</Link>
              </li>
              <li>
                <Link>MSI</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <h2 className="text-2xl font-semibold mb-10">About Us</h2>
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <Link>About Name</Link>
              </li>
              <li>
                <Link>News & Blogs</Link>
              </li>
              <li>
                <Link>Help</Link>
              </li>
              <li>
                <Link>Partners</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <h2 className="text-2xl font-semibold mb-10">Services</h2>
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <Link>Gift Card</Link>
              </li>
              <li>
                <Link>Shipping & Delivery</Link>
              </li>
              <li>
                <Link>Order Pickup</Link>
              </li>
              <li>
                <Link>Account Signup</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <h2 className="text-2xl font-semibold mb-10">Social</h2>
            <ul className="flex flex-col gap-4 text-lg">
              <li>
                <Link className="flex flex-row items-center gap-2">
                  <img
                    src={facebookSvg}
                    alt="facebookSvg"
                    className="svg-size"
                  />
                  Facebook
                </Link>
              </li>
              <li>
                <Link className="flex flex-row items-center gap-2">
                  <img
                    src={instagramSvg}
                    alt="instagramSvg"
                    className="svg-size"
                  />
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="flex flex-row items-center gap-2">
                  <img
                    src={telegramSvg}
                    alt="telegramSvg"
                    className="svg-size"
                  />
                  Telegram
                </Link>
              </li>
              <li>
                <Link className="flex flex-row items-center gap-2">
                  <img src={xSvg} alt="xSvg" className="svg-size" />
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
