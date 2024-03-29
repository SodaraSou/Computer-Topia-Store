import { Link } from "react-scroll";
import ASUS from "../../../../assets/img/ASUS.webp";
import TUFGAMING from "../../../../assets/img/TUFGAMING.webp";
import ROG from "../../../../assets/img/ROG.webp";
import MSI from "../../../../assets/img/MSI.webp";
import MICROSOFT from "../../../../assets/img/MICROSOFT.webp";
import LENOVO from "../../../../assets/img/LENOVO.webp";
import DELL from "../../../../assets/img/DELL.webp";
import GIGABYTE from "../../../../assets/img/GIGABYTE.webp";
import APPLE from "../../../../assets/img/APPLE.png";

function BrandSidebar({ toggleMenu }) {
  const brand = [
    {
      id: 0,
      brand: "APPLE",
      img: APPLE,
    },
    {
      id: 1,
      brand: "ASUS",
      img: ASUS,
    },
    {
      id: 2,
      brand: "ASUS TUF GAMING",
      img: TUFGAMING,
    },
    {
      id: 3,
      brand: "ASUS ROG",
      img: ROG,
    },
    {
      id: 4,
      brand: "MSI",
      img: MSI,
    },
    {
      id: 5,
      brand: "MICROSOFT",
      img: MICROSOFT,
    },
    {
      id: 6,
      brand: "LENOVO",
      img: LENOVO,
    },
    {
      id: 7,
      brand: "DELL",
      img: DELL,
    },
    {
      id: 8,
      brand: "GIGABYTE",
      img: GIGABYTE,
    },
  ];
  return (
    <>
      <ul className="sticky top-20 left-0 flex flex-col items-start gap-4 lg:mr-10">
        {brand.map((brand) => (
          <li key={brand.id}>
            <Link
              onClick={toggleMenu}
              activeClass="active"
              to={brand.brand}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <img src={brand.img} alt="hardware_type" className="w-full" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BrandSidebar;
