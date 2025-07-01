import { create } from "zustand";
import { findUserByEmail } from "../services/api/userService";

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
            const res = await findUserByEmail(email);
            if (res) {
                set({ result: res });
            } else {
                set({ error: "Data tidak ditemukan..." });
            }
        } catch (error) {
            set({ error: "Terjadi kesalahan jaringan atau server." })
        } finally {
            set({ loading: false });
        }
    },
}));

export default useSearchUserStore;
