function Button({ title, onClick, customClass }) {
  const defaultClass =
    "rounded-xl bg-[#5E17EB] text-white p-2 h-10 w-32 font-semibold";
  const buttonClass = customClass
    ? `${defaultClass} ${customClass}`
    : defaultClass;
  return (
    <button onClick={onClick} className={buttonClass}>
      {title}
    </button>
  );
}

export default Button;
