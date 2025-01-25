import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Gamelist from "../../components/gamelist/Gamelist";
import { useGames } from "../../context/GamesContext";
import { useEffect, useMemo } from "react";

const Listgames = () => {
  const { category } = useParams(); 
  const navigate = useNavigate(); 
  const { mobileGames, pcGames, isLoading, error, games } = useGames(); 

  useEffect(() => {
    if (!category || (category !== "mobile" && category !== "pc")) {
      navigate("/error");
    }
  }, [category, navigate]);

  const filteredGames = useMemo(() => {
    if (category === "mobile") return mobileGames;
    if (category === "pc") return pcGames;
    return [];
  }, [category, mobileGames, pcGames]);

  if (isLoading || games.length === 0) {
    return <p>Loading...</p>;
  }

  if (error) {
    return navigate("/error");
  }

  return (
    <main className="text-white font-ro bg-blue-dark">
      <Header />
      <section className="h-[20dvh] bg-[#140F23] flex justify-center items-center text-center">
        <div>
          <h1 className="font-ow text-6xl">TODOS OS JOGOS</h1>
          <p className="text-2xl">Explore nossa biblioteca com mais de 100 jogos</p>
        </div>
      </section>
      <section className="mx-[5%]">
        {filteredGames.length > 0 ? (
          <Gamelist games={filteredGames} />
        ) : (
          <p className="text-center text-xl">Nenhum jogo encontrado para esta categoria.</p>
        )}
      </section>
    </main>
  );  
};

export default Listgames;
