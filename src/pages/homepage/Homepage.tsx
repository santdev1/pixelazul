import { useGames } from "../../context/GamesContext";
import GamesCarousel from "../../components/gamescarrosel/GamesCarousel";
import Header from "../../components/header/Header";
import ModalCarousel from "../../components/modalcarrossel/ModalCarousel";
import Footer from "../../components/footer/Footer";

const Homepage = () => {
  const { featuredGames, isLoading, error } = useGames();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="h-auto font-ro bg-blue-dark text-white">
      <Header />
      <ModalCarousel />
      <section className="h-[60dvh] flex items-center">
        <GamesCarousel
          speed={2000}
          type={"pc"}
          title={"JOGOS RECOMENDADOS"}
          subtitle="Os jogos mais procurados nos mundos dos games"
          games={featuredGames} 
        />
      </section>
      <section className="h-[60dvh] flex items-center">
        <GamesCarousel
          speed={3000}
          type={"mobile"}
          title={"JOGOS MOBILE"}
          subtitle="Os jogos mais procurados pelos gamers mobile"
          games={featuredGames.filter((game) => game.type === "mobile")} 
        />
      </section>
      <section className="h-[60dvh] flex items-center">
        <GamesCarousel
          speed={4000}
          type={"pc"}
          title={"OS FAVORITOS DA GALERA"}
          subtitle="Os mais procurados por aqui"
          games={featuredGames.filter((game) => game.type === "pc")} 
        />
      </section>
      <Footer />
    </main>
  );
};

export default Homepage;
