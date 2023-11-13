import PlusSvg from "../../assets/svg/plus-solid.svg";
import MinusSvg from "../../assets/svg/minus-solid.svg";

function QuantityButton() {
  return (
    <span className="px-4 py-2 bg-[#5E17EB] flex items-center justify-between text-lg rounded-full dropdown-button-size text-white">
      <button>
        <img src={MinusSvg} alt="MinusSvg" className="mr-4 svg-size" />
      </button>
      1
      <button>
        <img src={PlusSvg} alt="PlusSvg" className="ml-4 svg-size" />
      </button>
    </span>
  );
}

export default QuantityButton;
