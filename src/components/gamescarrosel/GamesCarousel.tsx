import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Game from "../../types/Game";
import CardGames from "../cardgames/CardGames";
import Autoplay from "embla-carousel-autoplay";
import { useNavigate } from "react-router-dom";

interface GamesCarouselProps {
  title: string;
  subtitle: string;
  type: string
  speed:number,
  games: Game[];
}

const GamesCarousel: React.FC<GamesCarouselProps> = ({ title, type, speed, subtitle, games }) => {
    const navigate = useNavigate()
    return (
      <div className="text-white py-10 px-4 md:px-10 overflow-hidden">
        <div className="text-left mb-8 md:mb-10">
          <h1 className="text-3xl md:text-5xl font-ow text-blue-light">{title}</h1>
          <p className="text-white text-lg md:text-2xl">{subtitle}</p>
        </div>
        <Carousel
          className="overflow-hidden"
          plugins={[
            Autoplay({
              delay: speed,
            }),
          ]}
        >
          <CarouselContent className="flex gap-4 md:gap-5">
            {games.map((game) => (
              <CarouselItem 
                key={game.id} 
                className="flex-none w-2/3 sm:w-1/3 md:w-1/4 lg:w-1/6"
              >
                <CardGames game={game} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center mt-5">
          <button
          onClick={() =>{navigate(`/listgames/${type}`)}} 
          className="bg-blue-light text-white py-2 px-4 rounded-lg mt-16 hover:bg-blue-dark transition text-sm md:text-base">
            VER MAIS
          </button>
        </div>
      </div>
    );
  };
  
  export default GamesCarousel;
  