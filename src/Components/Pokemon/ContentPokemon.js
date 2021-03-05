import { useState, useEffect } from "react";
import GetTypeImg from "./GetTypeImg";
import GetStats from "./GetStats";
import { Button } from "react-bootstrap";
import GetFlavortext from "./GetFlavortext";

const ContentPokemon = (props) => {
  const [pokeinfo, setPokeinfo] = useState([]);
  const url = window.location.href;
  const nb = url.substring(url.lastIndexOf("/") + 1);
  let geturl = `https://pokeapi.co/api/v2/pokemon/${nb}`;
  let types = pokeinfo.types;
  let abilities = pokeinfo.abilities;
  let nbPrev = nb - 1;
  let nbNext = parseInt(nb) + 1;

  const getInfos = async (geturl) => {
    const response = await fetch(geturl);
    const result = await response.json();
    console.log(result);
    return result;
  };

  useEffect(() => {
    getInfos(geturl).then((result) => setPokeinfo(result));
  }, [url]);

  const getWeight = (weight) => {
    const kg = weight / 10;
    return kg;
  };

  const getHeight = (height) => {
    const cm = height / 10;
    return cm;
  };

  return (
    <>
      <div className="container">
        <div>
          <a className="pokepagebtnsLeft" href={"/pokemon/" + nbPrev}>
            <Button variant="danger">Previous</Button>
          </a>
          <a className="pokepagebtnsRight" href={"/pokemon/" + nbNext}>
            <Button variant="danger">Next</Button>
          </a>
        </div>
        <div className="row">
          <div className="col-4 pokepageimg">
            {pokeinfo.sprites ? (
              <div className="row">
                <div className="col-6">
                  <p>Normal</p>
                  <img src={pokeinfo.sprites.front_default} />
                  <img src={pokeinfo.sprites.back_default} />
                </div>
                <div className="col-6">
                  <p>Shiny</p>
                  <img src={pokeinfo.sprites.front_shiny} />
                  <img src={pokeinfo.sprites.back_shiny} />
                </div>
              </div>
            ) : (
              <p></p>
            )}
          </div>

          <div className="col-3 pokepagemaininf">
            <div>
              <h2 className="capitalize">{pokeinfo.name}</h2>
              <h4>#{pokeinfo.id}</h4>
            </div>
            <div className="row">
              <div className="col-6">{getHeight(pokeinfo.height)}m</div>
              <div className="col-6">{getWeight(pokeinfo.weight)}kg</div>
            </div>
          </div>

          <div className="col-4 pokepagescndinf">
            <div className="row">
              <div className="col-4">
                <h4>Types</h4>
              </div>
              <div className="col-8">
                <div className="row">
                  {types ? (
                    types.map((element) => (
                      <div className="col">
                        <GetTypeImg type={element.type.name} />
                      </div>
                    ))
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <h4>Abilities</h4>
              </div>
              <div className="col-8">
                <div className="row">
                  {abilities ? (
                    abilities.map((element) => (
                      <div className="col">
                        <p className="capitalize">{element.ability.name}</p>
                      </div>
                    ))
                  ) : (
                    <p></p>
                  )}
                </div>
              </div>
            </div>

            <div>
              {pokeinfo && pokeinfo.stats ? (
                <GetStats stats={pokeinfo.stats} />
              ) : (
                <p></p>
              )}
            </div>
          </div>
        </div>

        {pokeinfo && pokeinfo.species ? (
          <GetFlavortext url={pokeinfo.species.url} />
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default ContentPokemon;
