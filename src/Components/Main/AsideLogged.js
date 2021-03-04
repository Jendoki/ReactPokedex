import { Button } from "react-bootstrap";

const AsideLogged = (props) => {
  return (
    <>
      <aside>
        <li>
          <Button variant="danger">Profile</Button>
        </li>

        <h3>Lists</h3>

        <li>
          <Button variant="danger">Pokémon</Button>
        </li>
        <li>
          <Button variant="danger">Items</Button>
        </li>
        <li>
          <Button variant="danger">Egg groups</Button>
        </li>

        <h3>Search</h3>

        <li>
          <Button variant="danger">Pokémon</Button>
        </li>
        <li>
          <Button variant="danger">Items</Button>
        </li>
      </aside>
    </>
  );
};

export default AsideLogged;
