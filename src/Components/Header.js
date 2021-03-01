import Logo from "./Logo";
import {Button} from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <nav className="header">
        <div className="row">
          <div className="col-2">
            <a href="/"><Logo /></a>
          </div>
          <div className="col-8">
            <h1 className="title">React Pokédex</h1>
          </div>

          <div className="col-2">
            <div className="button">
            <Button variant="outline-light">Log In</Button>
            </div>
            <div className="button">
            <Button variant="outline-light">Register</Button>
            </div>
            
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
