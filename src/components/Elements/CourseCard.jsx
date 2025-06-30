export default function CourseCard(props) {
  const { course } = props;
  return (
    <div className="bg-white rounded-xl p-4 mb-1 lg:mb-5 border-2 border-slate-200 max-w-md mx-auto xl:[direction:ltr]">
      <div className="flex items-center justify-start xl:block">
        <img src={course.imageUrl} className={`h-[100px] w-[100px] object-cover rounded-lg mr-4 xl:w-full xl:h-36`} />
        <p className="hidden xl:block xl:my-2 xl:text-slate-400 xl:text-sm">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik</p>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold xl:text-lg">{course.title}</h2>
          <div className="flex">
            <img src={course.avatarUrl} alt="avatar mentor" className="w-11 xl:w-8" />
            <div className="ml-2">
              <h3 className="font-semibold text-lg xl:text-base">{course.instructor}</h3>
              <p className="text-sm text-slate-500 xl:text-xs">
                {course.position}{" "}
                <span className="hidden xl:inline-block">
                  di <span className="font-bold">{course.company}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center xl:text-xs">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              <img src={`/img/card/${i < Math.floor(course.rating) ? "star-full" : i === Math.floor(course.rating) && course.rating % 1 !== 0 ? "start-stgh" : "start-empty"}.svg`} alt={`star-${i}`} />
            </span>
          ))}
          <div className="ml-5 text-slate-500 font-semibold xl:ml-2">
            <p className="underline underline-offset-[3px]">
              {course.rating} ({course.reviewCount})
            </p>
          </div>
        </div>
        <div>
          <p className="text-4xl font-bold text-green-500 xl:text-lg">{course.price}</p>
        </div>
      </div>
    </div>
  );
}
