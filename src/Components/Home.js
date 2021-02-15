import Header from "./Header";
import Aside from "./Aside";
import Content from "./Content";
import Footer from "./Footer";

const Home = (props) => {
  return (
    <>
      <Header />
      <div class="row">
        <div class="col-2">
          <Aside />
        </div>
        <div class="col-10">
          <Content />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
