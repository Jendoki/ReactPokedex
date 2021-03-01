import { useState, useEffect } from "react";

const Pokecard = (props) => {
  const [pokeinfo, setPokeinfo] = useState([]);

  //get info from ONE pokemon
  const getIndividualInfos = async (url) => {
    const response = await fetch(props.url);
    const resultindividual = await response.json();
    //console.log(resultindividual);
    return resultindividual;
  };

  useEffect(() => {
    getIndividualInfos(props.url).then((result) => setPokeinfo(result));
  }, [props.url]);
  //console.log(pokeinfo.sprites.front_default);

  const getWeight = (weight) => { 
    const kg = weight/10;
    return kg;
  }

  const getHeight = (height) => {
    const cm = height/10;
    return cm;
  }

  return (
    <>
      <div className="cardpoke">
        <div className="card-body">
          <h4 className="card-title">
            <div style={{ display: "inline-block" }}>
                {pokeinfo.sprites ? <img src={pokeinfo.sprites.front_default} /> : <img className="logo" src="/Assets/img/image0.png" />}
              n°{pokeinfo.id} -{" "}
              <p style={{ display: "inline-block" }} className="capitalize">
                {props.pokename}
              </p>
            </div>
            <div>{getWeight(pokeinfo.weight)} kg - {getHeight(pokeinfo.height)} m</div>
          </h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </>
  );
};

export default Pokecard;
