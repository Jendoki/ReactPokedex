import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Pokecard from "./Pokecard";
import EgglistPokecard from "./EgglistPokecard";

const ContentListEgg = (props) => {
  const [ressource, setRessource] = useState("indeterminate");
  const [list, setList] = useState({
    id: 11,
    name: "indeterminate",
    names: [
      {
        language: {
          name: "ja-Hrkt",
          url: "https://pokeapi.co/api/v2/language/1/",
        },
        name: "ふていけい",
      },
      {
        language: { name: "ko", url: "https://pokeapi.co/api/v2/language/3/" },
        name: "부정형",
      },
      {
        language: { name: "fr", url: "https://pokeapi.co/api/v2/language/5/" },
        name: "Amorphe",
      },
      {
        language: { name: "de", url: "https://pokeapi.co/api/v2/language/6/" },
        name: "Amorph",
      },
      {
        language: { name: "es", url: "https://pokeapi.co/api/v2/language/7/" },
        name: "Amorfo",
      },
      {
        language: { name: "it", url: "https://pokeapi.co/api/v2/language/8/" },
        name: "Amorfo",
      },
      {
        language: { name: "en", url: "https://pokeapi.co/api/v2/language/9/" },
        name: "Amorphous",
      },
    ],
    pokemon_species: [
      { name: "grimer", url: "https://pokeapi.co/api/v2/pokemon-species/88/" },
      { name: "muk", url: "https://pokeapi.co/api/v2/pokemon-species/89/" }
    ],
  });

  const getInfos = async (ressource) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/egg-group/${ressource}`
    );
    const result = await response.json();
    //console.log(result.pokemon_species);
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
        {list.pokemon_species.map((element) => (
          <EgglistPokecard pokename={element.name} />
        ))}
      </div>
    </>
  );
};

export default ContentListEgg;
