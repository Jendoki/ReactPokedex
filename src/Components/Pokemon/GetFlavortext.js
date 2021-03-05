import { useState, useEffect } from "react";

const GetFlavortext = (props) => {
  const url = props.url;
  const [pokeinfo, setPokeinfo] = useState([]);
  const englishFT = [];

  const getInfos = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    getInfos(url).then((result) => setPokeinfo(result));
  }, [url]);

  const getEnglishtext = () => {
    pokeinfo && pokeinfo.flavor_text_entries ? (
      pokeinfo.flavor_text_entries.forEach((element) => {
        if (element.language.name === "en") {
          englishFT.push(element);
        }
      })
    ) : (
      <p></p>
    );
  };
  getEnglishtext();

  return (
    <>
      <div style={{ textAlign: "left" }}>
        <h4>Pokedex entries</h4>
        {englishFT.map((element) => (
          <div className="row">
            <div className="col-3">
              <p className="capitalize">{element.version.name.replaceAll('-', ' ')}</p>
            </div>
            <div className="col-9">
            <p>{element.flavor_text.replaceAll("", " ")}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GetFlavortext;
