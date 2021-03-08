import Header from "./Header";
import AsideGuest from "./AsideGuest";

const Notyet = (props) => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-1.5">
          <AsideGuest />
        </div>
        <div className="col-10">
          <div className="content">
            <div className="txt">
              <p>
                Sadly enough, this page is not available yet!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notyet;
