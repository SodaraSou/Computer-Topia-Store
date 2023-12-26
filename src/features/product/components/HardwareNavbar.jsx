import { Link } from "react-scroll";
import {
  CPU,
  GPU,
  MOTHERBOARD,
  RAM,
  HDD,
  PSU,
  CASE,
  MONITOR,
} from "../../../assets/img";

function HardwareTypeNavbar() {
  const hardwareType = [
    {
      id: 1,
      name: "CPU",
      img: CPU,
    },
    {
      id: 2,
      name: "GPU",
      img: GPU,
    },
    {
      id: 3,
      name: "MB",
      img: MOTHERBOARD,
    },
    {
      id: 4,
      name: "RAM",
      img: RAM,
    },
    {
      id: 5,
      name: "Storage",
      img: HDD,
    },
    {
      id: 6,
      name: "PSU",
      img: PSU,
    },
    {
      id: 7,
      name: "Case",
      img: CASE,
    },
    {
      id: 8,
      name: "Monitor",
      img: MONITOR,
    },
  ];
  return (
    <ul className="flex justify-between items-center gap-4">
      {hardwareType.map((hardwareType) => (
        <li key={hardwareType.id}>
          <Link
            activeClass="active"
            to={hardwareType.name}
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            className="flex items-center gap-2"
          >
            <img
              src={hardwareType.img}
              alt="hardware_type"
              className="w-10 h-10"
            />
            <p className="hidden lg:block">{hardwareType.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HardwareTypeNavbar;
