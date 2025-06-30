import RegisterForm from "../components/Fragments/RegisterForm";
import Header from "../components/Elements/Header";

export default function Register() {
  return (
    <div className="bg-[#FFFDF3] font-[Lato] min-h-screen">
      <Header />
      <section className="flex justify-center items-center px-3 pt-10 pb-5 lg:pt-32 lg:pb-10">
        <div className="bg-white p-8 w-full max-w-lg rounded-md border border-slate-100 flex flex-col gap-2">
          <h1 className="font-bold text-2xl text-center">Pendaftaran Akun</h1>
          <p className="text-slate-500 mb-4 text-center">Yuk, daftarkan akunmu sekarang</p>
          <RegisterForm />
        </div>
      </section>
    </div>
  );
}
