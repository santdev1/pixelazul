import Game from "../../types/Game";
import CardGames from "../cardgames/CardGames";

interface GameListProps {
  games: Game[];
}

const Gamelist = ({ games }: GameListProps) => {
  return (
    <article className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
      {games.map((game) => (
        <CardGames key={game.id} game={game} />
      ))}
    </article>
  );
};

export default Gamelist;
