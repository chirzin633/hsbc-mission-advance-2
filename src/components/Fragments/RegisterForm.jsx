import Divider from "../Elements/Divider";
import GoogleLoginButton from "../Elements/GoogleLoginButton";
import PasswordInput from "../Elements/PasswordInput";
import PhoneInput from "../Elements/PhoneInput";
import SelectInput from "../Elements/SelectInput";
import TextInput from "../Elements/TextInput";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";

export default function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleNavigate() {
    navigate("/login");
  }

  function handleChange(e) {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Pasword dan konfirmasi tidak sama!");
      return;
    }

    setIsLoading(true);

    try {
      const res = await axios.post("https://685a53d39f6ef9611155e75f.mockapi.io/users", {
        name: formData.name,
        email: formData.email,
        gender: formData.gender,
        phone: formData.phone,
        password: formData.password,
      });
      setSuccess(`Selamat ${res.data.name}! Registrasi anda berhasil.`);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Registrasi gagal!");
      } else if (err.request) {
        setError("Tidak ada respons dari server");
      } else {
        setError("Terjadi kesalahan saat mengirim data:" + err.message);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <TextInput label="Nama Lengkap" id="name" value={formData.name} onChange={handleChange} required />
      <TextInput label="Email" id="email" type="email" value={formData.email} onChange={handleChange} required />
      <SelectInput
        label="Jenis Kelamin"
        id="gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        options={[
          { value: "pria", label: "Pria" },
          { value: "wanita", label: "Wanita" },
        ]}
        required
      />
      <PhoneInput value={formData.phone} onChange={handleChange} required />
      <PasswordInput label="Kata Sandi " id="password" value={formData.password} onChange={handleChange} required />
      <PasswordInput label="Konfirmasi Kata Sandi " id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />

      {error && <div className="text-red-500 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}

      <div className="w-full flex flex-col gap-3">
        <button onClick={handleNavigate} type="button" className="py-2 bg-green-500 text-white rounded-xl font-semibold" disabled={isLoading}>
          Masuk
        </button>

        <button type="submit" className="py-2 bg-[#E2FCD9CC] text-[#3ECF4C] rounded-xl font-semibold" disabled={isLoading}>
          {isLoading ? "Memproses..." : "Daftar"}
        </button>

        <Divider />
        <GoogleLoginButton />
      </div>
    </form>
  );
}
