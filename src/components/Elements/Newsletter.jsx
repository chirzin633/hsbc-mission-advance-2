export default function Newsletter(props) {
  const { title, description } = props;
  return (
    <section className="container mx-auto my-6 px-4 text-white xl:px-40">
      <div className={`bg-[url(/img/hero2.jpg)] bg-cover bg-center bg-black/80 bg-blend-overlay max-h-screen flex flex-col items-center justify-center gap-2 rounded-lg py-10 px-4 xl:px-28`}>
        <h5 className="uppercase">Newsletter</h5>
        <h1 className="text-3xl text-center font-extrabold">{title}</h1>
        <p className="text-center font-semibold">{description}</p>

        <div className="flex flex-col gap-4 w-full max-w-md mt-10 lg:max-w-xl lg:flex-row lg:items-center lg:relative">
          <input type="email" placeholder="Masukkan Emailmu" className="p-2 bg-white rounded-xl placeholder:text-center placeholder:text-slate-600 text-black lg:p-4 lg:w-full lg:placeholder:text-start outline-none" />
          <button className="py-2 bg-orange-400 rounded-xl font-bold lg:absolute top-0 right-4 lg:translate-y-2 lg:w-1/4">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
