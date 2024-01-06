import { Link } from "react-scroll";
import Router from "../../../../assets/img/wifi-router.png";

function AccessorySidebar() {
  const accessoriesType = [
    {
      name: "Router",
      img: Router,
    },
  ];
  return (
    <ul className="sticky top-20 left-0 flex md:flex-col items-start gap-4 md:gap-10">
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
              className="w-8 md:w-10 h-8 md:h-10"
            />
            <p className="hidden lg:block">{accessoriesType.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default AccessorySidebar;
