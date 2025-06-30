export default function HeroTop(props) {
  const { title, description, buttonText } = props;
  return (
    <section className="container mx-auto text-center text-white my-6 px-4 xl:px-40">
      <div className={`bg-[url(/img/hero1.jpeg)] bg-cover bg-center bg-black/80 bg-blend-overlay flex flex-col items-center justify-center gap-4 rounded-lg py-10 px-4 xl:px-28`}>
        <h1 className="text-4xl font-extrabold">{title}</h1>
        <p className="text-lg">{description}</p>
        <button className="bg-green-500 p-2 rounded-xl cursor-pointer">{buttonText}</button>
      </div>
    </section>
  );
}
