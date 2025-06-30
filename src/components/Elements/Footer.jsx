export default function Footer() {
  return (
    <footer className="bg-white mt-5 border-t-2 border-t-gray-200">
      <div className="container p-5 mx-auto xl:px-40">
        <div className="sm:flex sm:justify-center sm:gap-28">
          <div className="w-full sm:w-1/2">
            <img src="img/logo-videobelajar.svg" alt="logo videbelajar" />
            <h1 className="font-bold my-1">Gali Potensi Anda Melalui Pembelajaran Video di Hariesok.id</h1>
            <p className="my-1">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
            <p>+62-877-7123-1234</p>
          </div>

          <div className="w-full my-2 sm:w-1/2 sm:flex sm:gap-5">
            <FooterSection title="Kategori" items={["Digital & Teknologi", "Pemasaran", "Manajemen Bisnis", "Pengembangan Diri", "Desain"]} />
            <FooterSection title="Perusahaan" items={["Tentang Kami", "FAQ", "Kebijakan Privasi", "Ketentuan Layanan", "Bantuan"]} />
            <FooterSection title="Komunitas" items={["Tips Sukses", "Blog"]} />
          </div>
        </div>

        <hr className="border-t-2 border-t-gray-200" />

        <div className="w-full pt-3 sm:flex sm:justify-between">
          <div className="flex gap-2 sm:order-2">
            <SocialIcon icon="/img/linkedin.svg" alt="logo linkedin" />
            <SocialIcon icon="/img/fb.svg" alt="logo facebook" />
            <SocialIcon icon="/img/ig.svg" alt="logo instagram" />
            <SocialIcon icon="/img/twitter.svg" alt="logo twitter" />
          </div>
          <p className="font-semibold text-slate-500 pt-2 sm:order-1">@2025 Gerobak Sayur All Right Reserved.</p>
        </div>
      </div>
    </footer>
  );

  function FooterSection(props) {
    const { title, items } = props;
    return (
      <div className="flex items-center gap-3 sm:flex-col sm:items-start">
        <h3 className="font-bold">{title}</h3>
        <ul className="hidden text-slate-500 sm:flex sm:flex-col sm:gap-3">
          {items.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <svg
          className="sm:hidden"
          fill="#000000"
          height="10px"
          width="10px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 330.00 330.00"
          xmlSpace="preserve"
          stroke="#000000"
          strokeWidth="33"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
            ></path>
          </g>
        </svg>
      </div>
    );
  }

  function SocialIcon(props) {
    const { icon, alt } = props;
    return (
      <a href="#" className="w-9 h-9 rounded-full border-2 border-gray-400 flex justify-center items-center">
        <img src={icon} alt={alt} />
      </a>
    );
  }
}
