import Header from "../Main/Header";
import AsideGuest from "../Main/AsideGuest";
import AsideLogged from "../Main/AsideLogged";
import ContentListItem from "./ContentListItem.js";
import Footer from "../Main/Footer";

const ListItem = (props) => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-1.5">
          <AsideGuest />
        </div>
        <div className="col-10">
          <ContentListItem />
        </div>
      </div>
    </>
  );
};

export default ListItem;

  