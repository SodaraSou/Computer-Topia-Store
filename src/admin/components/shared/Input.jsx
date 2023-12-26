function Input({ Svg, placeholder, customClass }) {
  const defaultClass = "relative flex";
  const inputClass = customClass
    ? `${defaultClass} ${customClass}`
    : defaultClass;
  return (
    <div className={inputClass}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl px-4 py-2 border focus:outline-none focus:ring focus:border-[#5E17EB]"
      />
      {Svg !== undefined && (
        <button className="svg-size absolute top-[13px] right-3">
          <img src={Svg} alt="svg" className="svg-size" />
        </button>
      )}
    </div>
  );
}

export default Input;
