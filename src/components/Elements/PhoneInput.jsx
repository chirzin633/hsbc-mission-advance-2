export default function PhoneInput(props) {
  const { label = "No. HP ", country = "ind", countryCode = "+62", onChange, value, required } = props;
  return (
    <label htmlFor="phone">
      <span className="after:content-['*'] after:text-red-500">{label}</span>
      <div className="flex gap-4 mt-1">
        <div className="flex items-center border rounded border-slate-200">
          <span className="bg-slate-200 p-2 border-r border-r-slate-200">🇮🇩</span>
          <select name="country" id="country" className="w-16 md:w-32 px-1" defaultValue={country}>
            <option value="ind">{countryCode}</option>
          </select>
        </div>
        <input type="number" name="phone" id="phone" onChange={onChange} value={value} required={required} className="w-full border border-slate-200 p-2" />
      </div>
    </label>
  );
}
