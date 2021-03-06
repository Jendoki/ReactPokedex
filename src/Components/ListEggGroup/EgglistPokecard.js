import { useState, useEffect } from "react";

const EgglistPokecard = (props) => {
  let name = props.pokename;
  const [pokeinfo, setPokeinfo] = useState([]);
  let url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  

  const getInfos = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    getInfos(url).then((result) => setPokeinfo(result));
  }, [url]);
  let id = pokeinfo.id;

  return (
    <>
      <div className="egglistimg">
        <a href={"/pokemon/"+id}>
          {pokeinfo.sprites ? (
            <img className="pokeimg" src={pokeinfo.sprites.front_default} />
          ) : (
            <p></p>
          )}
        </a>
      </div>
    </>
  );
};

export default EgglistPokecard;
