import { Button } from "react-bootstrap";

const AsideGuest = (props) => {
  return (
    <>
      <aside>
        <h3>Lists</h3>

        <li>
          <a href="/listpokemon">
            <Button variant="danger">Pokémon</Button>
          </a>
        </li>
        <li>
          <Button variant="danger">Items</Button>
        </li>
        <li>
          <a href="/listegg">
            <Button variant="danger">Egg groups</Button>
          </a>
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

export default AsideGuest;
