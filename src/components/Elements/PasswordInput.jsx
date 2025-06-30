import { useState } from "react";

export default function PasswordInput(props) {
  const { label, id, value, onChange, required } = props;
  const [isVisible, setIsVisible] = useState(false);

  function handleToggleVisibility() {
    setIsVisible((prev) => !prev);
  }

  return (
    <label htmlFor={id} className="relative block">
      <span className="after:content-['*'] after:text-red-500">{label} </span>
      <input type={isVisible ? "text" : "password"} id={id} name={id} placeholder={label} value={value} onChange={onChange} required={required} className="block w-full p-2 border rounded border-slate-200 pr-10" />
      <button type="button" className="absolute right-3 top-9" tabIndex={-1} onClick={handleToggleVisibility}>
        <img src={`../public/img/${isVisible ? "eye-on.svg" : "eye-off.svg"}`} alt={isVisible ? "Show password" : "Hide password"} height={20} width={20} />
      </button>
    </label>
  );
}
