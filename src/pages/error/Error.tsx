import React from "react";


const ErrorPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-dark text-white">
      <h1 className="text-6xl font-ow mb-4">Ocorreu um erro!</h1>
      <p className="text-xl mb-4">
        Algo deu errado ao carregar os jogos. Tente novamente mais tarde.
      </p>
    
    </div>
  );
};

export default ErrorPage;
