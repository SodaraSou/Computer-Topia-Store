import { useState } from "react";
import ShowPassword from "../../assets/svg/eye-solid.svg";
import HidePassword from "../../assets/svg/eye-slash-solid.svg";

function InputGroup({
  title,
  type,
  placeholder,
  id,
  onChange,
  value,
  disable,
}) {
  const isPasswordInput = type === "password";
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm md:text-lg font-semibold">
        {title}
      </label>
      <div className="relative flex">
        <input
          type={isPasswordInput && showPassword ? "text" : type}
          placeholder={isPasswordInput && showPassword ? type : placeholder}
          id={id}
          onChange={onChange}
          value={value}
          required={isPasswordInput}
          disabled={disable}
          className="rounded-xl w-full px-4 py-2 border focus:outline-none focus:ring focus:border-[#5E17EB]"
        />
        {isPasswordInput && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="svg-size absolute top-[14px] right-3"
          >
            {showPassword ? (
              <img src={HidePassword} alt="Hide Password" />
            ) : (
              <img src={ShowPassword} alt="Show Password" />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputGroup;
