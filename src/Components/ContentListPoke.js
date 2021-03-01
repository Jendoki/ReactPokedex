import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Pokecard from "./Pokecard";

const ContentListePoke = (props) => {
  const [ressource, setRessource] = useState("?limit=151");
  const [list, setList] = useState({
    count: 3,
    next: "/",
    previous: null,
    results: [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
    ],
  });
  let i = 0;

  //get name and pokemon infos url from selected pokemon
  const getInfos = async (ressource) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${ressource}`
    );
    const result = await response.json();
    //console.log(result.results);
    // result.results.forEach((element) => {
    //   getIndividualInfos(result.results[i].url);
    //   i++;
    // });
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
          onClick={(event) => handleClick(event, "?limit=898")}
        >
          All
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "?limit=151")}
        >
          Kanto
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "?limit=100&offset=151")}
        >
          Johto
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "?limit=135&offset=251")}
        >
          Hoenn
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "?limit=107&offset=386")}
        >
          Sinnoh
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "?limit=156&offset=493")}
        >
          Unova
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "?limit=72&offset=649")}
        >
          Kalos
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "?limit=88&offset=721")}
        >
          Alola
        </Button>
        <Button
          variant="danger"
          onClick={(event) => handleClick(event, "?limit=89&offset=809")}
        >
          Galar
        </Button>
      </div>
      <div className="containercards">
        {list.results.map((element) => (
          <Pokecard pokename={element.name} url={element.url}/>
        ))}
      </div>
    </>
  );
};

export default ContentListePoke;
