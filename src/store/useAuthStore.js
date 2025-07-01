import { create } from "zustand";
import { persist } from 'zustand/middleware';
import axios from "axios";

const useAuthStore = create(persist((set) => ({
    errorMessage: "",
    user: null,

    login: async (email, password, onSuccess) => {
        if (!email || !password) {
            return set({ errorMessage: "Email dan Password harus diisi!" });
        }

        try {
            const res = await axios.get("https://685a53d39f6ef9611155e75f.mockapi.io/users");
            const users = res.data;
            const user = users.find((u) => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem("email", user.email);
                set({ errorMessage: "", user });
                onSuccess(user.email);
            } else {
                set({ errorMessage: "Email atau Password Salah!" });
            }
        } catch (err) {
            console.error(err);
            set({ errorMessage: "Gagal terhubung ke server." });
        }
    },

    logout: () => {
        localStorage.removeItem("email");
        set({ user: null });
    },

    setUser: (user) => set({ user }),
}), { name: 'auth-storage' }
));

export default useAuthStore;
