import ShowEvoline from "./ShowEvoline";
import { useState, useEffect } from "react";

const GetEvoline = (props) => {
  const url = props.url;
  const [pokeinfo, setPokeinfo] = useState([]);

  const getInfos = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    getInfos(url).then((result) => setPokeinfo(result));
  }, [url]);
  console.log(pokeinfo.evolution_chain);

  return (
    <>
      {pokeinfo && pokeinfo.evolution_chain ? <ShowEvoline url={pokeinfo.evolution_chain.url} /> : <p></p> }
      
    </>
  );
};

export default GetEvoline;
