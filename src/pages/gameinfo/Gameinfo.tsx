import { useParams } from "react-router-dom";
import { useGames } from "../../context/GamesContext";
import Header from "../../components/header/Header";
import GamesCarousel from "../../components/gamescarrosel/GamesCarousel";

const Gameinfo = () => {
  const { id } = useParams<{ id: string }>();
  const { getGameById, isLoading, error, featuredGames } = useGames();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const game = getGameById(Number(id));

  if (!game) return <p>Game not found</p>;


  const downloadLinks = [
    { platform: "MEDIAFIRE", url: "https://store.steampowered.com/app/12345" },
    { platform: "MEGA", url: "https://www.epicgames.com/store" },
    { platform: "TORRENT", url: "https://play.google.com/store" },
    { platform: "DRIVE", url: "https://apps.apple.com" },
  ];

  return (
    <main className="text-white font-ro bg-blue-dark min-h-screen">
      <Header />
      <section className="h-[85dvh] md:h-[65dvh] flex flex-col md:flex-row p-4 md:p-8 gap-6 items-center">

        <article className="md:w-1/2 flex justify-center items-center">
          <img
            className="w-full max-w-md h-auto rounded-lg shadow-lg"
            src={game.image}
            alt={game.title}
          />
        </article>


        <article className="md:w-1/2 space-y-10">
        <div> 
            <h1 className="font-ow text-blue-light text-6xl mb-4">{game.title}</h1>
            <p className="text-gray-300">{game.description}</p>
        </div>
         
          <div className="flex flex-col md:flex-row gap-4">
            <div className="max-w-md">
              <h2 className="text-blue-light font-ow text-2xl">Requisitos Mínimos</h2>
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {game.requisitos_min}
              </p>
            </div>
            <div className="max-w-md">
              <h2 className="text-blue-light font-ow text-2xl">Requisitos Recomendados</h2>
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {game.requisitos_rec}
              </p>
            </div>
          </div>
      
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              {downloadLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-light text-white rounded-[7px] shadow hover:bg-blue-dark hover:text-white transition"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </article>
      </section>

      <section className="h-[50dvh]p-4 md:p-8">
        <GamesCarousel
          speed={2000}
          type={"feature"}
          title={"JOGOS RECOMENDADOS"}
          subtitle="Os jogos mais procurados nos mundos dos games"
          games={featuredGames}
        />
      </section>
    </main>
  );
};

export default Gameinfo;
