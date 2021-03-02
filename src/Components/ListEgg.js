import Header from "./Header";
import AsideGuest from "./AsideGuest";
import AsideLogged from "./AsideLogged";
import ContentListEgg from "./ContentListEgg";
import Footer from "./Footer";

const ListEgg = (props) => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-1.5">
          <AsideGuest />
        </div>
        <div className="col-10">
          <ContentListEgg />
        </div>
      </div>
    </>
  );
};

export default ListEgg;
