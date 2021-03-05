import Header from "../Main/Header";
import AsideGuest from "../Main/AsideGuest";
import AsideLogged from "../Main/AsideLogged";
import ContentPokemon from "./ContentPokemon";
import Footer from "../Main/Footer";

const Pokemon = (props) => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-1.5">
          <AsideGuest />
        </div>
        <div className="col-10">
          <ContentPokemon />
        </div>
      </div>
    </>
  );
};

export default Pokemon;
