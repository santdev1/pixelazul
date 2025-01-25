import { Link } from "react-router-dom";
import pixelazul from '../../assets/images/pixelazul.png';
import Search from '../search/Search';

const Header = () => {
  return (
    <header className="bg-blue-dark h-[15dvh]">
      <section className="flex items-center justify-between h-6/10 px-4">
        <img src={pixelazul} alt="Pixel Azul" className="h-10" />
        <div className="flex-1 flex justify-center">
          <Search />
        </div>
      </section>
      <nav className="bg-blue-light text-white flex justify-center items-center h-4/10">
        <Link className="mx-6 hover:text-blue-dark" to="/">HOME</Link>
        <Link className="mx-6 hover:text-blue-dark" to="/">SOBRE NÓS</Link>
        <Link className="mx-6 hover:text-blue-dark" to={`/listgames/${"pc"}`}>JOGOS</Link>
      </nav>
    </header>
  );
};  

export default Header;
