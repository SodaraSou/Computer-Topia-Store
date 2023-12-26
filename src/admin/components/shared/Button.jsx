function Button({ children, onClick, customClass }) {
  const defaultClass =
    "rounded-xl bg-[#5E17EB] text-white p-2 md:h-10 md:w-32 text-sm md:text-base font-semibold";
  const buttonClass = customClass
    ? `${defaultClass} ${customClass}`
    : defaultClass;
  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}

export default Button;
