import CourseCard from "./CourseCard";
import courses from "../../data/courses.json";
export default function CourseSection() {
  return (
    <section className="container mx-auto px-4 xl:px-40">
      <h1 className="text-3xl font-bold mb-3">Koleksi Video Pembelajaran Unggulan</h1>
      <p className="text-base font-semibold text-gray-500 mb-8">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>

      <div className="mb-10">
        <ul className="flex gap-8 overflow-x-auto relative font-semibold text-gray-500">
          <li className="sm:h-10 h-16">
            <a href="#" className="text-red-500">
              Semua Kelas
            </a>
            <div className="absolute sm:top-9 top-14 left-0 right-0 h-1 w-10 bg-red-500 rounded-md"></div>
          </li>
          <li>
            <a href="#">Pemasaran</a>
          </li>
          <li>
            <a href="#">Desain</a>
          </li>
          <li>
            <a href="#">Pengembangan Diri</a>
          </li>
          <li>
            <a href="#">Bisnis</a>
          </li>
        </ul>
      </div>

      <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:[direction:rtl]">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
