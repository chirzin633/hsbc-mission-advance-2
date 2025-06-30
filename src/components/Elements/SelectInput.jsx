export default function SelectInput(props) {
  const { label, id, name, options, value, onChange, required } = props;
  return (
    <label htmlFor={id}>
      <span className="after:content-['*'] after:text-red-500">{label} </span>
      <select name={name} id={id} onChange={onChange} value={value} required={required} className="block w-full p-2 border border-slate-200 mt-1">
        <option value="" disabled hidden>
          Pilih {label}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
