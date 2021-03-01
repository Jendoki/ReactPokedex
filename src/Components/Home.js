import Header from "./Header";
import AsideGuest from "./AsideGuest";
import AsideLogged from "./AsideLogged";
import Content from "./Content";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-1.5">
          <AsideGuest />
        </div>
        <div className="col-10">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Home;
