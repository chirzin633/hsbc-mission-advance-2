import { create } from 'zustand';
import axios from 'axios';

const API_URL = "https://685a53d39f6ef9611155e75f.mockapi.io/items";
const defaultForm = {
    title: "",
    description: "",
    instructor: "",
    position: "",
    company: "",
    rating: "",
    price: ""
};

const useItemStore = create((set, get) => ({
    items: [],
    form: { ...defaultForm },
    editIndex: null,

    fetchItems: async () => {
        try {
            const res = await axios.get(API_URL);
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

    resetForm: () => set({ form: { ...defaultForm }, editIndex: null }),


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
                const res = await axios.post(API_URL, form);
                set({ items: [...items, res.data] });
            } else {
                const res = await axios.put(`${API_URL}/${items[editIndex].id}`, form);
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
            await axios.delete(`${API_URL}/${id}`);
            set({ items: items.filter((_, i) => i !== index) });

            if (editIndex === index) resetForm();
        } catch (err) {
            console.error("Gagal hapus", err);
        }
    },
}));
export default useItemStore;
