import PlusSvg from "../../../assets/svg/plus-solid.svg";
import MinusSvg from "../../../assets/svg/minus-solid.svg";

function CartItem() {
  return (
    <div className="flex justify-between items-center">
      <div className="w-[400px] flex items-center gap-4 md:gap-10">
        <div className="bg-[#D9D9d9] w-[100px] md:w-[200px] h-[100px] md:h-[200px] rounded-2xl"></div>
        <h2 className="text-lg md:text-2xl font-semibold">AirPods Max</h2>
      </div>
      <div className="w-[400px] flex justify-between items-center">
        <p className="text-md md:text-lg font-semibold">$549.00</p>
        <span className="px-4 py-2 bg-[#5E17EB] flex items-center justify-between text-lg rounded-full dropdown-button-size text-white">
          <button>
            <img src={MinusSvg} alt="MinusSvg" className="mr-4 svg-size" />
          </button>
          1
          <button>
            <img src={PlusSvg} alt="PlusSvg" className="ml-4 svg-size" />
          </button>
        </span>
        <p className="text-md md:text-lg font-semibold">$549.00</p>
      </div>
    </div>
  );
}

export default CartItem;
