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
        className="rounded-xl w-full px-4 py-2 border"
      />
    </div>
  );
}

export default Input;
