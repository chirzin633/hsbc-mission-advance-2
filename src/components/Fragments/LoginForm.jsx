import TextInput from "../Elements/TextInput";
import PasswordInput from "../Elements/PasswordInput";
import Divider from "../Elements/Divider";
import GoogleLoginButton from "../Elements/GoogleLoginButton";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      setErrorMessage("Email dan Password harus diisi!");
      return;
    }

    try {
      const res = await axios.get("https://685a53d39f6ef9611155e75f.mockapi.io/users");
      const users = res.data;
      const foundUser = users.find((user) => user.email === email && user.password === password);

      if (foundUser) {
        localStorage.setItem("email", foundUser.email);
        navigate("/dashboard", { state: { email: foundUser.email } });
      } else {
        setErrorMessage("Email atau Password Salah!");
      }
    } catch (err) {
      setErrorMessage("Gagal terhubung ke server.", err);
    }
  }

  function handleNavigate() {
    navigate("/register");
  }

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-3">
      {/* Tampilkan error jika ada */}
      {errorMessage && <p className="bg-red-100 text-red-700 px-4 py-2 rounded-md">{errorMessage}</p>}

      <TextInput label="E-mail" id="email" />
      <PasswordInput label="Kata Sandi" id="password" />

      <div className="flex justify-end">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          Lupa Password?
        </a>
      </div>

      <div className="w-full flex flex-col gap-3">
        <button type="submit" className="py-2 bg-green-500 text-white rounded-xl font-semibold">
          Masuk
        </button>

        <button onClick={handleNavigate} type="button" className="py-2 bg-[#E2FCD9CC] text-[#3ECF4C] rounded-xl font-semibold">
          Daftar
        </button>

        <Divider />
        <GoogleLoginButton />
      </div>
    </form>
  );
}
