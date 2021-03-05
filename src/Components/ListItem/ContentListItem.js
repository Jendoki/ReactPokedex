import { useState, useEffect } from "react";
import { Button, DropdownButton, Dropdown } from "react-bootstrap";
import ScrollTop from "react-scrolltop-button";
import ItemlistCard from "./ItemlistCard.js";

const ContentListItem = (props) => {
  const [ressource, setRessource] = useState("10");
  const [list, setList] = useState([]);

  const getItems = async (ressource) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/item-category/${ressource}`
    );
    const result = await response.json();
    return result;
  };

  const handleClick = (event, ressource) => {
    event.preventDefault();
    setRessource(ressource);
  };

  useEffect(() => {
    console.log(ressource);
    getItems(ressource).then((result) => setList(result));
  }, [ressource]);

  getItems();

  return (
    <>
      <div className="container">
        <DropdownButton
          className="button"
          variant="danger"
          id="dropdown-basic-button"
          title="Items"
        >
          <Dropdown.Item onClick={(event) => handleClick(event, "10")}>
            Evolution
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "44")}>
            Mega stones
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "46")}>
            Z crystals
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "12")}>
            Held items
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "11")}>
            Spelunking
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "40")}>
            Apricorns
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "9")}>
            Collectibles
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "24")}>
            Loot
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "25")}>
            Mail
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "32")}>
            Mulch
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "38")}>
            Flutes
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "42")}>
            Jewels
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "42")}>
            Memories
          </Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          className="button"
          variant="danger"
          id="dropdown-basic-button"
          title="Pokeballs"
        >
          <Dropdown.Item onClick={(event) => handleClick(event, "34")}>
            Standard balls
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "33")}>
            Special balls
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "39")}>
            Apricorn balls
          </Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          className="button"
          variant="danger"
          id="dropdown-basic-button"
          title="Battle Items"
        >
          <Dropdown.Item onClick={(event) => handleClick(event, "26")}>
            Vitamins
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "1")}>
            Stat boosts
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "43")}>
            Miracle shooter
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "13")}>
            Choice
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "14")}>
            Effort training
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "15")}>
            Bad held items
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "16")}>
            Training
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "17")}>
            Plates
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "18")}>
            Species specific
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "19")}>
            Type enhancement
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "36")}>
            Scarves
          </Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          className="button"
          variant="danger"
          id="dropdown-basic-button"
          title="Medicine"
        >
          <Dropdown.Item onClick={(event) => handleClick(event, "27")}>
            Healing
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "28")}>
            PP recovery
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "29")}>
            Revival
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "30")}>
            Status cure
          </Dropdown.Item>
        </DropdownButton>

        <Button
          className="button"
          variant="danger"
          onClick={(event) => handleClick(event, "37")}
        >
          TMs
        </Button>

        <DropdownButton
          className="button"
          variant="danger"
          id="dropdown-basic-button"
          title="Berries"
        >
          <Dropdown.Item onClick={(event) => handleClick(event, "3")}>
            Medecine
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "2")}>
            Effort drop
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "5")}>
            In a pinch
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "6")}>
            Picky healing
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "7")}>
            Type protection
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "8")}>
            Baking only
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "4")}>
            Other
          </Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          className="button"
          variant="danger"
          id="dropdown-basic-button"
          title="Key items"
        >
          <Dropdown.Item onClick={(event) => handleClick(event, "20")}>
            Event items
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "21")}>
            Gameplay
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "22")}>
            Plot advancement
          </Dropdown.Item>
          <Dropdown.Item onClick={(event) => handleClick(event, "35")}>
            Dex completion
          </Dropdown.Item>
        </DropdownButton>

        <div className="containercards">
          {list.items ? (
            list.items.map((element) => (
              <ItemlistCard name={element.name} url={element.url} />
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
      <ScrollTop text="Back to top ⇧" style={{ backgroundColor: "#c82333", color: "white" }} />
    </>
  );
};

export default ContentListItem;
