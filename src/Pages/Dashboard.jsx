import HeaderDashboard from "../components/Elements/HeaderDashboard";
import HeroTop from "../components/Elements/HeroTop";
import CourseSection from "../components/Elements/CourseSection";
import Newsletter from "../components/Elements/Newsletter";
import Footer from "../components/Elements/Footer";
import { useLocation } from "react-router";

export default function Dashboard() {
  const location = useLocation();
  const email = location.state?.email;
  return (
    <div className="bg-[#FFFDF3] font-[Lato]">
      <HeaderDashboard email={email} />
      <main>
        <HeroTop
          title="Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform Video Interaktif!"
          description="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
          buttonText="Temukan Video Course untuk Dipelajari!"
        />
        <CourseSection />
        <Newsletter title="Mau Belajar Lebih Banyak?" description="Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id" />
      </main>
      <Footer />
    </div>
  );
}
