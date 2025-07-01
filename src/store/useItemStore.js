import { create } from 'zustand';
import { fetchItems, createItem, updateItem, deleteItem } from '../services/api/itemService';

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
    editItemId: null,

    fetchItems: async () => {
        try {
            const res = await fetchItems();
            set({ items: res });
        } catch (err) {
            console.error("Gagal fetch data:", err);
        }
    },

    setForm: (payload) => set((state) => ({ form: { ...state.form, ...payload } })),
    setEditItem: (id) => {
        const item = get().items.find((item) => item.id === id);
        set({ editItemId: id, form: item });
    },

    resetForm: () => set({ form: { ...defaultForm }, editItemId: null }),


    handleChange: (e) => {
        const { id, value } = e.target;
        set((state) => ({ form: { ...state.form, [id]: value } }));
    },

    submitItem: async () => {
        const { form, items, editItemId, resetForm } = get();

        if (!form.title || !form.instructor || !form.rating) {
            alert("Field wajib tidak boleh kosong");
            return;
        }

        try {
            if (!editItemId) {
                const res = await createItem(form);
                set({ items: [...items, res] });
            } else {
                const res = await updateItem(editItemId, form);
                set({ items: items.map((item) => item.id === editItemId ? res : item) });
            }
            resetForm();
        } catch (err) {
            console.error("Gagal simpan", err);
        }
    },

    deleteItem: async (id) => {
        const { items, editItemId, resetForm } = get();
        if (!confirm("Yakin ingin menghapus item ini?")) return;
        try {
            await deleteItem(id)
            set({ items: items.filter((item) => item.id !== id) });

            if (editItemId === id) resetForm();
        } catch (err) {
            console.error("Gagal hapus", err);
        }
    },
}));
export default useItemStore;
