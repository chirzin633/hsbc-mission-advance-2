import AdminTableRow from "./AdminTableRow";

export default function AdminItemList(props) {
  const { items, handleEdit, handleDelete, formatCurrency, capitalize } = props;
  return (
    <div className="bg-white shadow-md p-6 rounded-lg my-5">
      <h2 className="text-xl font-bold mb-4">Item List</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No items found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 font-semibold">ID</th>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Instructor</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {items.map((item, index) => (
                <AdminTableRow key={index} item={item} index={index} onEdit={handleEdit} onDelete={handleDelete} onCurrency={formatCurrency} capitalize={capitalize} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
