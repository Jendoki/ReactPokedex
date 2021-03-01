import Header from "./Header";
import AsideGuest from "./AsideGuest";
import AsideLogged from "./AsideLogged";
import ContentListPoke from "./ContentListPoke";
import Footer from "./Footer";

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
