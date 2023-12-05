function Button({ children, onClick, customClass, disabled }) {
  const defaultClass =
    "rounded-xl bg-[#5E17EB] text-white px-4 md:px-2 py-2 md:h-10 md:w-28 font-semibold";
  const buttonClass = customClass
    ? `${defaultClass} ${customClass}`
    : defaultClass;
  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
