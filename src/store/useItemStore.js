import { create } from 'zustand';
import axios from 'axios';

const useItemStore = create((set, get) => ({
    items: [],
    form: { title: "", description: "", instructor: "", position: "", company: "", rating: "", price: "" },
    editIndex: null,

    fetchItems: async () => {
        try {
            const res = await axios.get("https://685a53d39f6ef9611155e75f.mockapi.io/items");
            set({ items: res.data });
        } catch (err) {
            console.error("Gagal fetch data:", err);
        }
    },

    setForm: (payload) => set((state) => ({ form: { ...state.form, ...payload } })),
    setEditIndex: (index) => {
        const item = get().items[index];
        set({ editIndex: index, form: item });
    },

    resetForm: () => set({ form: { title: "", description: "", instructor: "", position: "", company: "", rating: "", price: "" }, editIndex: null }),


    handleChange: (e) => {
        const { id, value } = e.target;
        set((state) => ({ form: { ...state.form, [id]: value } }));
    },

    submitItem: async () => {
        const { form, items, editIndex, resetForm } = get();

        if (!form.title || !form.instructor || !form.rating) {
            alert("Field wajib tidak boleh kosong");
            return;
        }

        try {
            if (editIndex === null) {
                const res = await axios.post("https://685a53d39f6ef9611155e75f.mockapi.io/items", form);
                set({ items: [...items, res.data] });
            } else {
                const res = await axios.put(`https://685a53d39f6ef9611155e75f.mockapi.io/items/${items[editIndex].id}`, form);
                const updated = [...items];
                updated[editIndex] = res.data;
                set({ items: updated });
            }
            resetForm();
        } catch (err) {
            console.error("Gagal simpan", err);
        }
    },

    deleteItem: async (index) => {
        const { items, editIndex, resetForm } = get();
        const id = items[index].id;
        if (!confirm("Yakin ingin menghapus item ini?")) return;

        try {
            await axios.delete(`https://685a53d39f6ef9611155e75f.mockapi.io/items/${id}`);
            set({ items: items.filter((_, i) => i !== index) });

            if (editIndex === index) resetForm();
        } catch (err) {
            console.error("Gagal hapus", err);
        }
    },
}));
export default useItemStore;
