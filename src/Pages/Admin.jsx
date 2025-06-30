import HeaderDashboard from "../components/Elements/HeaderDashboard";
import AdminForm from "../components/Elements/AdminForm";
import AdminItemList from "../components/Elements/AdminItemList";
import Sidebar from "../components/Elements/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Admin() {
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({ title: "", description: "", instructor: "", position: "", company: "", rating: "", price: "" });

  useEffect(() => {
    axios
      .get("https://685a53d39f6ef9611155e75f.mockapi.io/items")
      .then((res) => setItems(res.data))
      .catch((err) => console.error("Gagal fetch data:", err));
  }, []);

  function handleChange(e) {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  }

  function handleEdit(index) {
    setEditIndex(index);
    setForm(items[index]);
  }

  async function handleSubmit() {
    if (!form.title || !form.instructor || !form.rating) {
      alert("Field wajib tidak boleh kosong");
      return;
    }

    try {
      if (editIndex === null) {
        const res = await axios.post("https://685a53d39f6ef9611155e75f.mockapi.io/items", form);
        setItems((prev) => [...prev, res.data]);
      } else {
        const id = items[editIndex].id;
        const res = await axios.put(`https://685a53d39f6ef9611155e75f.mockapi.io/items/${id}`, form);
        const updated = [...items];
        updated[editIndex] = res.data;
        setItems(updated);
        setEditIndex(null);
      }
      setForm({ title: "", description: "", instructor: "", position: "", company: "", rating: "", price: "" });
    } catch (err) {
      console.error("Gagal simpan", err);
    }
  }

  async function handleDelete(index) {
    const id = items[index].id;
    if (!confirm("Yakin ingin menghapus item ini?")) return;

    try {
      await axios.delete(`https://685a53d39f6ef9611155e75f.mockapi.io/items/${id}`);
      setItems(items.filter((_, i) => i !== index));
      if (editIndex === index) {
        setEditIndex(null);
        setForm({ title: "", description: "", instructor: "", position: "", company: "", rating: "", price: "" });
      }
    } catch (err) {
      console.error("Gagal hapus", err);
    }
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  }

  function capitalizeEachWord(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <div className="font-[Lato] min-h-screen bg-[#FFFDF3]">
      <HeaderDashboard />
      <div className="md:flex w-full">
        <Sidebar />
        <div className="p-4 md:px-10 w-full">
          <h1 className="text-2xl font-extrabold mb-4">Admin Dashboard</h1>
          <p className="mb-4">Welcome to the admin dashboard. Here you can manage item and description</p>
          <AdminForm form={form} handleChange={handleChange} handleSubmit={handleSubmit} editIndex={editIndex} />
          <AdminItemList items={items} handleEdit={handleEdit} handleDelete={handleDelete} formatCurrency={formatCurrency} capitalize={capitalizeEachWord} />
        </div>
      </div>
    </div>
  );
}
