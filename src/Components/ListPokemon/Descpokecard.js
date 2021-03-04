import { useState, useEffect } from "react";

const Descpokecard = (props) => {
  const [pokedesc, setPokedesc] = useState([]);
  let entry = "Couldn't load information on this pokémon, sorry!";

  const getDesc = async (url) => {
    const response = await fetch(props.url);
    const desc = await response.json();
    return desc;
  };

  useEffect(() => {
    getDesc(props.url).then((result) => setPokedesc(result));
  }, [props.url]);
  console.log(pokedesc);

  const switchEntry = () => { 
    if (pokedesc.flavor_text_entries[0].language.name === "en") {
      entry = pokedesc.flavor_text_entries[0].flavor_text;
    } else if (pokedesc.flavor_text_entries[1].language.name === "en") {
      entry = pokedesc.flavor_text_entries[1].flavor_text;
    } else if (pokedesc.flavor_text_entries[2].language.name === "en") {
      entry = pokedesc.flavor_text_entries[2].flavor_text;
    } else if (pokedesc.flavor_text_entries[3].language.name === "en") {
      entry = pokedesc.flavor_text_entries[3].flavor_text;
    } else if (pokedesc.flavor_text_entries[4].language.name === "en") {
      entry = pokedesc.flavor_text_entries[4].flavor_text;
    } else if (pokedesc.flavor_text_entries[5].language.name === "en") {
      entry = pokedesc.flavor_text_entries[5].flavor_text;
    } else if (pokedesc.flavor_text_entries[6].language.name === "en") {
      entry = pokedesc.flavor_text_entries[6].flavor_text;
    } else if (pokedesc.flavor_text_entries[7].language.name === "en") {
      entry = pokedesc.flavor_text_entries[7].flavor_text;
    } else if (pokedesc.flavor_text_entries[8].language.name === "en") {
      entry = pokedesc.flavor_text_entries[8].flavor_text;
    } else if (pokedesc.flavor_text_entries[9].language.name === "en") {
      entry = pokedesc.flavor_text_entries[9].flavor_text;
    }
    return entry;
  }

  return (
    <>
      {pokedesc.flavor_text_entries ? (
        <p className="card-text left">
          {switchEntry()}
        </p>
      ) : (
        <p>Couldn't load information on this pokémon, sorry!</p>
      )}
    </>
  );
};

export default Descpokecard;
