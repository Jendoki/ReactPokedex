import { useState, useEffect } from "react";
import Descpokecard from "./Descpokecard";

const Pokecard = (props) => {
  const [pokeinfo, setPokeinfo] = useState([]);
  let flavorText = "Couldn't load information on this pokémon, sorry!";

  //get info from ONE pokemon
  const getIndividualInfos = async (url) => {
    const response = await fetch(props.url);
    const resultindividual = await response.json();
    return resultindividual;
  };

  useEffect(() => {
    getIndividualInfos(props.url).then((result) => setPokeinfo(result));
  }, [props.url]);
  console.log(pokeinfo);

  let id = pokeinfo.id;

  const getWeight = (weight) => {
    const kg = weight / 10;
    return kg;
  };

  const getHeight = (height) => {
    const cm = height / 10;
    return cm;
  };

  const switchEntry = () => {
    if (pokeinfo.flavor_text_entries[0].language.name === "en") {
      flavorText = pokeinfo.flavor_text_entries[0].flavor_text;
    } else if (pokeinfo.flavor_text_entries[1].language.name === "en") {
      flavorText = pokeinfo.flavor_text_entries[1].flavor_text;
    } else if (pokeinfo.flavor_text_entries[2].language.name === "en") {
      flavorText = pokeinfo.flavor_text_entries[2].flavor_text;
    } else if (pokeinfo.flavor_text_entries[3].language.name === "en") {
      flavorText = pokeinfo.flavor_text_entries[3].flavor_text;
    } else if (pokeinfo.flavor_text_entries[4].language.name === "en") {
      flavorText = pokeinfo.flavor_text_entries[4].flavor_text;
    } else if (pokeinfo.flavor_text_entries[5].language.name === "en") {
      flavorText = pokeinfo.flavor_text_entries[5].flavor_text;
    } else if (pokeinfo.flavor_text_entries[6].language.name === "en") {
      flavorText = pokeinfo.flavor_text_entries[6].flavor_text;
    } else if (pokeinfo.flavor_text_entries[7].language.name === "en") {
      flavorText = pokeinfo.flavor_text_entries[7].flavor_text;
    } else if (pokeinfo.flavor_text_entries[8].language.name === "en") {
      flavorText = pokeinfo.flavor_text_entries[8].flavor_text;
    } else if (pokeinfo.flavor_text_entries[9].language.name === "en") {
      flavorText = pokeinfo.flavor_text_entries[9].flavor_text;
    }
    return flavorText;
  };

  const getFlavorText = () => {
    if (pokeinfo.species && pokeinfo.species.url) {
      flavorText = <Descpokecard url={pokeinfo.species.url} />;
    } else if (pokeinfo.flavor_text_entries) {
      flavorText = switchEntry();
    }
    return flavorText;
  };

  return (
    <>
      <a href={"/pokemon/" + id} style={{ color: "black" }}>
        <div className="cardpoke">
          <div className="card-body">
            <h3 className="card-title">
              {pokeinfo.sprites ? (
                <img className="pokeimg" src={pokeinfo.sprites.front_default} />
              ) : (
                <img className="pokeimg" src="/Assets/img/image0.png" />
              )}
              <div style={{ display: "inline-block" }}>
                #{pokeinfo.id} -{" "}
                <p style={{ display: "inline-block" }} className="capitalize">
                  {props.pokename.replaceAll('-', ' ')}
                </p>
              </div>
            </h3>
            <div>
              <h4>
                {pokeinfo.weight && pokeinfo.height ? (
                  getWeight(pokeinfo.weight) +
                  "kg - " +
                  getHeight(pokeinfo.height) +
                  " m"
                ) : (
                  <p></p>
                )}
              </h4>
            </div>

            {getFlavorText()}
          </div>
        </div>
      </a>
    </>
  );
};

export default Pokecard;
