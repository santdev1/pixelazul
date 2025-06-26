type Game = {
  id: number;
  title: string;
  image: string;
  description: string;
  download: { type: string; url: string }[]; // 👈 Adicionado
  requisitos_min: string;
  requisitos_rec: string;
  type: string;
  IsFeature: boolean;
};

export default Game