function Input({ title, type, placeholder, id, onChange, value }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-lg font-semibold">
        {title}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        value={value}
        className="rounded-xl w-full h-[38px] px-4 border"
      />
    </div>
  );
}

export default Input;
