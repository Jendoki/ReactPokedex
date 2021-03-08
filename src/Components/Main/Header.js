import Logo from "./Logo";
import { Button } from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <nav className="header">
        <div className="row">
          <div className="col-2">
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className="col-8">
            <h1 className="title">React Pokédex</h1>
          </div>

          <div className="col-2">
            <div className="button">
              <a href="/login">
                <Button variant="outline-light">Log In</Button>
              </a>
            </div>
            <div className="button">
              <a href="/register">
                <Button variant="outline-light">Register</Button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
