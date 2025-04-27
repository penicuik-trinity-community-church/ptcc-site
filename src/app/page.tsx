import Card from "../components/Card/Card";
import { homeData } from "@/data/homeData";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Page stays fully server-rendered */}
      <section className="w-full">
        <img
          src="/church.jpg"
          alt="Church"
          className="w-full h-[60vh] lg:h-[50vh] object-cover object-[50%_90%]"
          loading="eager"
        />
      </section>

      <section className="container mx-auto pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0">
          {homeData.map(({ title, description, imagePath, nextRoute }) => (
            <Card
              key={title}
              title={title}
              description={description}
              imagePath={imagePath}
              nextRoute={nextRoute}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
