import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { loginWithEmail } from "../services/api/authService";

const useAuthStore = create(persist((set) => ({
    errorMessage: "",
    user: null,

    login: async (email, password, onSuccess) => {
        if (!email || !password) {
            return set({ errorMessage: "Email dan Password harus diisi!" });
        }

        try {
            const user = await loginWithEmail(email, password);

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
