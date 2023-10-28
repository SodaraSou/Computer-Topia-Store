function Button({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full my-6 rounded-xl bg-white p-2 font-semibold hover:bg-sky-400 hover:duration-200"
    >
      {title}
    </button>
  );
}

export default Button;
