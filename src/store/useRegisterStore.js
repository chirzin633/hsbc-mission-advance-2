import { create } from "zustand";
import axios from "axios";

const useRegisterStore = create((set, get) => ({
    formData: {
        name: "",
        email: "",
        gender: "",
        phone: "",
        password: "",
        confirmPassword: "",
    },
    isLoading: false,
    error: "",
    success: "",

    setFormData: (field, value) =>
        set((state) => ({
            formData: { ...state.formData, [field]: value },
        })),

    resetMessages: () => set({ error: "", success: "" }),

    handleSubmit: async (navigate) => {
        const { formData } = get();

        if (formData.password !== formData.confirmPassword) {
            return set({ error: "Pasword dan konfirmasi tidak sama!" });
        }

        set({ isLoading: true, error: "", success: "" });

        try {
            const res = await axios.post("https://685a53d39f6ef9611155e75f.mockapi.io/users", {
                name: formData.name,
                email: formData.email,
                gender: formData.gender,
                phone: formData.phone,
                password: formData.password,
            });

            set({ success: `Selamat ${res.data.name}! Registrasi anda berhasil.` });

            setTimeout(() => {
                navigate("/login");
            }, 2000);

        } catch (err) {
            if (err.response) {
                set({ error: err.response.data.message || "Registrasi gagal!" });
            } else if (err.request) {
                set({ error: "Tidak ada respons dari server" });
            } else {
                set({ error: "Terjadi kesalahan saat mengirim data: " + err.message });
            }
        } finally {
            set({ isLoading: false });
        }
    },
}));

export default useRegisterStore;
