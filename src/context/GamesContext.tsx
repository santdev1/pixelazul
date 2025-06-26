import { createContext, useContext, useState, useEffect } from "react";
import Papa from "papaparse";
import Game from "../types/Game"; // ou defina o tipo aqui mesmo

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
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmYQWV3HgVjNtg0Q1xx0FnvxAto-lYEqzrnmr_h6xklDZfEuDMWhzChsaMINUX22C2sLUi9PNUGKx-/pub?output=csv"
        );
        const csvText = await response.text();

        const parsed = Papa.parse(csvText, { header: true });
        const data: Game[] = (parsed.data as any[]).map((row: any) => ({
          id: Number(row.id),
          title: row.title,
          image: row.image,
          description: row.description,
          download: [
            ...(row.mediafire ? [{ type: "mediafire", url: row.mediafire }] : []),
            ...(row.mega ? [{ type: "mega", url: row.mega }] : []),
            ...(row.drive ? [{ type: "drive", url: row.drive }] : []),
            ...(row.torrent ? [{ type: "torrent", url: row.torrent }] : [])
          ],
          requisitos_min: row.requisitos_min,
          requisitos_rec: row.requisitos_rec,
          type: row.type,
          IsFeature: row.IsFeature?.toLowerCase?.() === "true"
        }));

        setGames(data);
        setMobileGames(data.filter((game) => game.type === "mobile"));
        setPcGames(data.filter((game) => game.type === "pc"));
        setFeaturedGames(data.filter((game) => game.IsFeature));
      } catch (err: any) {
        setError(err.message || "Erro inesperado");
      } finally {
        setIsLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <GamesContext.Provider
      value={{ games, mobileGames, pcGames, featuredGames, isLoading, error, getGameById }}
    >
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => {
  const context = useContext(GamesContext);
  if (!context) throw new Error("useGames deve ser usado dentro de um GamesProvider");
  return context;
};
