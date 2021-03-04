import Header from "../Main/Header";
import AsideGuest from "../Main/AsideGuest";
import AsideLogged from "../Main/AsideLogged";
import ContentListPoke from "./ContentListPoke";
import Footer from "../Main/Footer";

const ListPoke = (props) => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-1.5">
          <AsideGuest />
        </div>
        <div className="col-10">
          <ContentListPoke />
        </div>
      </div>
    </>
  );
};

export default ListPoke;
