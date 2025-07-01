import { create } from "zustand";
import axios from "axios";

const API_URL = "https://685a53d39f6ef9611155e75f.mockapi.io/users"

const useSearchUserStore = create((set, get) => ({
    email: "",
    loading: false,
    result: null,
    error: "",

    setEmail: (email) => set({ email, error: "" }),
    resetResult: () => set({ result: null }),

    handleSearch: async () => {
        const { email } = get();
        if (!email.trim()) {
            return set({ error: "Kolom email tidak boleh kosong!" });
        }
        set({ loading: true, result: null, error: "" });

        try {
            const res = await axios.get(API_URL, {
                params: { email },
            });

            const result = res.data.length > 0 ? res.data[0] : null;
            set({ result });
        } catch (error) {
            set({ error: "Data tidak ditemukan..." })
        } finally {
            set({ loading: false });
        }
    },
}));

export default useSearchUserStore;
