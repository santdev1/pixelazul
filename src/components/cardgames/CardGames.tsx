import { useNavigate } from "react-router-dom";
import Game from "../../types/Game";

const CardGames: React.FC<{ game: Game }> = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-light rounded-[7px] p-4 text-left flex flex-col h-[300px]">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-32 object-cover mb-4 rounded-md"
      />
      <h1 className="text-blue-dark text-lg font-ow">{game.title}</h1>
      <p className="text-blue-dark mt-2 text-sm line-clamp-3">
        {game.description}
      </p>
      <div className="mt-auto">
        <button
          onClick={() => navigate(`/gameinfo/${game.id}`)}
          className="bg-blue-light hover:bg-blue-600 text-white text-sm font-ow py-2 px-4 rounded-[7px] w-full"
        >
          DOWNLOAD ⬇
        </button>
      </div>
    </div>
  );
};

export default CardGames;
