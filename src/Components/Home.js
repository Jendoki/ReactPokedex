import Header from "./Main/Header";
import AsideGuest from "./Main/AsideGuest";
import AsideLogged from "./Main/AsideLogged";
import Content from "./Main/Content";
import Footer from "./Main/Footer";

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
