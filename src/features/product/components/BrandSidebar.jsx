import {
  ASUS,
  TUFGAMING,
  ROG,
  MSI,
  MICROSOFT,
  LENOVO,
  DELL,
  GIGABYTE,
} from "../../../assets/img";

function BrandSidebar({ onClick }) {
  const brand = [
    {
      id: 1,
      img: ASUS,
    },
    {
      id: 2,
      img: TUFGAMING,
    },
    {
      id: 3,
      img: ROG,
    },
    {
      id: 4,
      img: MSI,
    },
    {
      id: 5,
      img: MICROSOFT,
    },
    {
      id: 6,
      img: LENOVO,
    },
    {
      id: 7,
      img: DELL,
    },
    {
      id: 8,
      img: GIGABYTE,
    },
  ];
  return (
    <ul className="flex flex-col gap-4">
      {brand.map((brand) => (
        <li key={brand.id}>
          <button onClick={onClick}>
            <img src={brand.img} alt="hardware_type" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BrandSidebar;
