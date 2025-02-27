// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import DownloadButton from "@/components/home/DownloadButton";

const Home = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 xl:mt-10">
          {/* text */}
          <div className="text-center xl:text-left xl:w-[60%] order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hola, soy
              <br />
              <span className="text-accent">Miguel Barreto</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Me destaco por crear experiencias digitales elegantes y soy
              competente en varios lenguajes y tecnologías de programación.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <DownloadButton />
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex 
                    justify-center items-center text-accent text-base hover:bg-accent 
                    hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:w-[40%]">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
