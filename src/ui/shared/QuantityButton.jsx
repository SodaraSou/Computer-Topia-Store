import PlusSvg from "../../assets/svg/plus-solid.svg";
import MinusSvg from "../../assets/svg/minus-solid.svg";
import { useState } from "react";

function QuantityButton({ handleQuantity, handleRemoveItem, handleAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const increase = () => {
    const updateQuantity = quantity + 1;
    setQuantity(updateQuantity);
    handleQuantity(updateQuantity);
  };
  const decrease = () => {
    if (quantity !== 1) {
      const updateQuantity = quantity - 1;
      setQuantity(updateQuantity);
      handleQuantity(updateQuantity);
    }
  };
  return (
    <span className="px-4 md:px-2 py-2 md:h-10 md:w-28 bg-[#5E17EB] flex items-center justify-center gap-4 text-lg rounded-full dropdown-button-size text-white">
      <button onClick={decrease}>
        <img src={MinusSvg} alt="MinusSvg" className="svg-size" />
      </button>
      {quantity}
      <button onClick={increase}>
        <img src={PlusSvg} alt="PlusSvg" className="svg-size" />
      </button>
    </span>
  );
}

export default QuantityButton;
