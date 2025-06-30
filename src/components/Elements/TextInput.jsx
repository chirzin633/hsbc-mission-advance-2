export default function TextInput(props) {
  const { label, id, type = "text", required, value, onChange } = props;
  return (
    <label htmlFor={id}>
      <span className={required ? "after:content-['*'] after:text-red-500" : ""}>{label} </span>
      <input type={type} id={id} name={id} value={value} onChange={onChange} required={required} placeholder={label} className="block w-full p-2 border rounded border-slate-200" />
    </label>
  );
}
