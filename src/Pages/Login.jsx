import Heeader from "../components/Elements/Header";
import LoginForm from "../components/Fragments/LoginForm";

export default function Login() {
  return (
    <div className="bg-[#FFFDF3] font-[Lato] min-h-screen">
      <Heeader />
      <section className="flex justify-center items-center px-3 pt-10 pb-5 lg:pt-32 lg:pb-10">
        <div className="bg-white p-8 w-full max-w-lg rounded-md border border-slate-100 flex flex-col gap-2">
          <h1 className="font-bold text-2xl text-center">Masuk ke Akun</h1>
          <p className="text-slate-500 mb-4 text-center">Yuk, Lanjutin belajarmu di videobelajar</p>
          <LoginForm />
        </div>
      </section>
    </div>
  );
}
