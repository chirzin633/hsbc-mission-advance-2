import { create } from "zustand";
import axios from "axios";

const API_URL = "https://685a53d39f6ef9611155e75f.mockapi.io/users"

const useSearchUserStore = create((set, get) => ({
    email: "",
    loading: false,
    result: null,

    setEmail: (email) => set({ email }),
    resetResult: () => set({ result: null }),

    handleSearch: async () => {
        const { email } = get();
        if (!email) return;
        set({ loading: true, result: null });

        try {
            const res = await axios.get(API_URL, {
                params: { email },
            });

            const result = res.data.length > 0 ? res.data[0] : null;
            set({ result });
        } catch (error) {
            console.error("Gagal fetching data...", error);
        } finally {
            set({ loading: false });
        }
    },
}));

export default useSearchUserStore;
