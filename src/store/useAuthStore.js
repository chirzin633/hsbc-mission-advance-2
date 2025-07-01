import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
    errorMessage: "",

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
                set({ errorMessage: "" });
                onSuccess(user.email); // callback untuk navigate
            } else {
                set({ errorMessage: "Email atau Password Salah!" });
            }
        } catch (err) {
            console.error(err);
            set({ errorMessage: "Gagal terhubung ke server." });
        }
    },
}));

export default useAuthStore;
