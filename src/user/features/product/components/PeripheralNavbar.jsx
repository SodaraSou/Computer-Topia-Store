import { Link } from "react-scroll";
import GamingChair from "../../../assets/img/gaming-chair.webp";
import Keyboard from "../../../assets/img/keyboard.webp";
import Mouse from "../../../assets/img/mouse.webp";
import Headphone from "../../../assets/img/headphones.webp";
import Microphone from "../../../assets/img/mic.webp";
import Webcam from "../../../assets/img/web-camera.png";

function PeripheralNavbar() {
  const peripheralType = [
    {
      name: "Headphone",
      img: Headphone,
    },
    {
      name: "Mouse",
      img: Mouse,
    },
    {
      name: "Keyboard",
      img: Keyboard,
    },
    {
      name: "Gaming Chair",
      img: GamingChair,
    },
    {
      name: "Microphone",
      img: Microphone,
    },
    {
      name: "Webcam",
      img: Webcam,
    },
  ];
  return (
    <ul className="flex justify-between items-center gap-4">
      {peripheralType.map((peripheralType, index) => (
        <li key={index}>
          <Link
            activeClass="active"
            to={peripheralType.name}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="flex items-center gap-2"
          >
            <img
              src={peripheralType.img}
              alt="hardware_type"
              className="w-10 h-10"
            />
            <p className="hidden lg:block">{peripheralType.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default PeripheralNavbar;
