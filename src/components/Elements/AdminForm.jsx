export default function AdminForm(props) {
  const { form, handleChange, handleSubmit, editIndex } = props;
  return (
    <div className="bg-white shadow-lg p-4">
      <h1 className="text-xl font-bold mb-5">{editIndex === null ? "Create New Item" : "Edit Item"}</h1>
      <form className="flex flex-col gap-3">
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <input type="text" id="title" className="border border-black rounded-sm p-1" placeholder="Enter item name" value={form.title} onChange={handleChange} />
        <label htmlFor="description" className="font-semibold">
          Description
        </label>
        <textarea id="description" className="h-20 border border-black rounded-sm p-1" placeholder="Enter item description" value={form.description} onChange={handleChange} />

        <label htmlFor="instructor">Instructor</label>
        <input type="text" id="instructor" value={form.instructor} onChange={handleChange} className="border border-black rounded-sm p-1" />
        <label htmlFor="position">Position</label>
        <input type="text" id="position" value={form.position} onChange={handleChange} className="border border-black rounded-sm p-1" />
        <label htmlFor="company">Company</label>
        <input type="text" id="company" value={form.company} onChange={handleChange} className="border border-black rounded-sm p-1" />
        <label htmlFor="rating">Rating</label>
        <input type="number" id="rating" value={form.rating} onChange={handleChange} className="border border-black rounded-sm p-1" />
        <label htmlFor="price">Price</label>
        <input type="number" id="price" value={form.price} onChange={handleChange} className="border border-black rounded-sm p-1" />
        <button type="button" onClick={handleSubmit} className="bg-sky-700 w-20 px-2 py-1 rounded text-white font-semibold">
          {editIndex === null ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
}
