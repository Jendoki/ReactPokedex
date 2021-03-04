import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import EgglistPokecard from "./EgglistPokecard";

const ContentListEgg = (props) => {
  const [ressource, setRessource] = useState("indeterminate");
  const [list, setList] = useState([]);

  const getInfos = async (ressource) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/egg-group/${ressource}`
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
    getInfos(ressource).then((result) => setList(result));
  }, [ressource]);

  return (
    <>
      <div className="container">
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "indeterminate")}
        >
          Amorphous
        </Button>
        <Button variant="danger" onClick={(event) => handleClick(event, "bug")}>
          Bug
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "dragon")}
        >
          Dragon
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "fairy")}
        >
          Fairy
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "ground")}
        >
          Field
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "plant")}
        >
          Grass
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "humanshape")}
        >
          Human-like
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "mineral")}
        >
          Mineral
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "monster")}
        >
          Monster
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "water1")}
        >
          Water 1
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "water2")}
        >
          Water 2
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "water3")}
        >
          Water 3
        </Button>
      </div>
      <h3 className="capitalize center">{ressource}</h3>
      <div className="containercards">
        {list.pokemon_species ? (
          list.pokemon_species.map((element) => (
            <EgglistPokecard pokename={element.name} />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default ContentListEgg;
