import Card from "../components/Card";
import { homeData } from "@/data/homeData";
import YouTubeEmbeded from "@/components/YouTubeEmbedded";

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="w-full">
        <img
          src="/church.jpg"
          alt="Church"
          className="w-full h-[60vh] lg:h-[50vh] object-cover object-[50%_90%]"
          loading="eager"
        />
      </header>

      <main className="container mx-auto pt-10">
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-0">
          {homeData.map(({ title, description, imagePath, nextRoute }) => (
            <Card
              key={title}
              title={title}
              description={description}
              imagePath={imagePath}
              nextRoute={nextRoute}
            />
          ))}
        </section>

        <section className="mt-15 text-center">
          <h2 className="text-3xl font-semibold mb-4">Watch Our Latest Service</h2>
          <div className="flex justify-center">
            <YouTubeEmbeded
              videoUrl="https://www.youtube.com/watch?v=MAdYYdK6zI4&t=248s"
              description="Penicuik Trinity Community Church Communion Sunday Service 27th April 2025"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
