import {
  CPU,
  GPU,
  MOTHERBOARD,
  RAM,
  HDD,
  SSD,
  PSU,
  CASE,
  MONITOR,
} from "../../../assets/img";

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
      name: "HDD",
      img: HDD,
    },
    {
      id: 6,
      name: "SSD",
      img: SSD,
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
    <ul className="flex flex-col gap-4">
      {hardwareType.map((hardwareType) => (
        <li key={hardwareType.id}>
          <button className="flex items-center gap-2">
            <img
              src={hardwareType.img}
              alt="hardware_type"
              className="w-10 h-10"
            />
            <p>{hardwareType.name}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default HardwareTypeSidebar;
