import { Link } from "react-scroll";
import Router from "../../../../assets/img/wifi-router.png";
import Cable from "../../../../assets/img/usb-c-cable.webp";
import Adapter from "../../../../assets/img/magsafe.webp";

function AccessorySidebar({ toggleMenu }) {
  const accessoriesType = [
    {
      name: "Router",
      img: Router,
    },
    {
      name: "Cable",
      img: Cable,
    },
    {
      name: "Adapter",
      img: Adapter,
    },
  ];
  return (
    <ul className="sticky top-20 left-0 flex flex-col items-start gap-4 lg:mr-10">
      {accessoriesType.map((accessoriesType, index) => (
        <li key={index}>
          <Link
            activeClass="active"
            onClick={toggleMenu}
            to={accessoriesType.name}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="flex items-center gap-2"
          >
            <img
              src={accessoriesType.img}
              alt="hardware_type"
              className="w-8 md:w-10 h-8 md:h-10"
            />
            <p>{accessoriesType.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AccessorySidebar;
