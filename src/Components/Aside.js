import { Button } from "react-bootstrap";

const Aside = (props) => {
  return (
    <>
      <aside>
        <h3>Lists</h3>

        <li>
          <Button variant="danger" block>
            Pokémon
          </Button>
        </li>
        <li>
          <Button variant="danger" block>
            Items
          </Button>
        </li>
        <li>
          <Button variant="danger" block>
            Egg groups
          </Button>
        </li>
      </aside>
    </>
  );
};

export default Aside;
