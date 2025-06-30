export default function AdminTableRow(props) {
  const { item, index, onEdit, onDelete, onCurrency, capitalize } = props;
  return (
    <tr className="border-t">
      <td className="px-4 py-3">{index + 1}</td>
      <td className="px-4 py-3">{capitalize(item.title)}</td>
      <td className="px-4 py-3">{capitalize(item.instructor)}</td>
      <td className="px-4 py-3">{onCurrency(item.price)}</td>
      <td className="px-4 py-3 text-center space-x-2">
        <button onClick={() => onEdit(index)} className="bg-yellow-400 hover:bg-yellow-500 text-white text-xs font-bold py-1 px-3 rounded">
          Edit
        </button>
        <button onClick={() => onDelete(index)} className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1 px-3 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
}
