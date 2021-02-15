import Logo from "./Logo";
import {Button} from "react-bootstrap";

const Header = (props) => {
  return (
    <>
      <nav class="header">
        <div class="row">
          <div class="col-2">
            <a href="/"><Logo /></a>
          </div>
          <div class="col-8">
            <h1 class="title">React Poké Dex</h1>
          </div>

          <div class="col-2">
            <div class="button">
            <Button variant="outline-light">Log In</Button>
            </div>
            <div class="button">
            <Button variant="outline-light">Register</Button>
            </div>
            
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
