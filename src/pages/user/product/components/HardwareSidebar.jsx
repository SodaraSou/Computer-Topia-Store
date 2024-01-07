import { Link } from "react-scroll";
import CPU from "../../../../assets/img/cpu.webp";
import GPU from "../../../../assets/img/gpu.webp";
import COOLER from "../../../../assets/img/cooler.webp";
import MOTHERBOARD from "../../../../assets/img/motherboard.webp";
import RAM from "../../../../assets/img/ram.webp";
import HDD from "../../../../assets/img/hdd.webp";
import PSU from "../../../../assets/img/psu.webp";
import CASE from "../../../../assets/img/computer.webp";
import MONITOR from "../../../../assets/img/television.webp";

function HardwareTypeSidebar() {
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
      name: "Cooler",
      img: COOLER,
    },
    {
      id: 4,
      name: "Motherboard",
      img: MOTHERBOARD,
    },
    {
      id: 5,
      name: "RAM",
      img: RAM,
    },
    {
      id: 6,
      name: "Storage",
      img: HDD,
    },
    {
      id: 7,
      name: "PSU",
      img: PSU,
    },
    {
      id: 8,
      name: "Case",
      img: CASE,
    },
    {
      id: 9,
      name: "Monitor",
      img: MONITOR,
    },
  ];
  return (
    <ul className="sticky top-20 left-0 flex md:flex-col items-start gap-4 md:gap-10 mr-4 md:mr-10">
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
              className="w-8 md:w-10 h-8 md:h-10"
            />
            <p className="hidden lg:block">{hardwareType.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default HardwareTypeSidebar;
