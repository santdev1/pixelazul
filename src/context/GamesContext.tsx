import { createContext, useContext, useState, useEffect } from "react";
import Game from "../types/Game";

interface GamesContextType {
  games: Game[];
  mobileGames: Game[];
  pcGames: Game[];
  featuredGames: Game[]; 
  isLoading: boolean;
  error: string | null;
  getGameById: (id: number) => Game | undefined;
}

const GamesContext = createContext<GamesContextType | undefined>(undefined);

export const GamesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [mobileGames, setMobileGames] = useState<Game[]>([]);
  const [pcGames, setPcGames] = useState<Game[]>([]);
  const [featuredGames, setFeaturedGames] = useState<Game[]>([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const getGameById = (id: number) => games.find((game) => game.id === id);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("/api/games.json");
        if (!response.ok) throw new Error(`Failed to fetch games: ${response.statusText}`);
        const data: Game[] = await response.json();

        setGames(data);
        setMobileGames(data.filter((game) => game.type === "mobile"));
        setPcGames(data.filter((game) => game.type === "pc"));
        setFeaturedGames(data.filter((game) => game.IsFeature)); 
      } catch (err: any) {
        setError(err.message || "An unexpected error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <GamesContext.Provider value={{ games, mobileGames, pcGames, featuredGames, isLoading, error, getGameById }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => {
  const context = useContext(GamesContext);
  if (!context) {
    throw new Error("useGames must be used within a GamesProvider");
  }
  return context;
};
