import Header from "./Header";
import AsideGuest from "./AsideGuest";
import AsideLogged from "./AsideLogged";
import ContentListItem from "./ContentListItem.js";
import Footer from "./Footer";

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

  