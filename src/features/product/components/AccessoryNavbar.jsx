import { Link } from "react-scroll";
import { Router } from "../../../assets/img/index";

function AccessoryNavbar() {
  const accessoriesType = [
    {
      name: "Router",
      img: Router,
    },
  ];
  return (
    <ul className="flex justify-between items-center gap-4">
      {accessoriesType.map((accessoriesType, index) => (
        <li key={index}>
          <Link
            activeClass="active"
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
              className="w-10 h-10"
            />
            <p className="hidden lg:block">{accessoriesType.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AccessoryNavbar;
