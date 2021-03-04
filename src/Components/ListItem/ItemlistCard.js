import { useState, useEffect } from "react";

const ItemlistCard = (props) => {
  const [iteminfo, setIteminfo] = useState([]);
  let name = props.name;
  let url = props.url;

  const getInfos = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    getInfos(url).then((result) => setIteminfo(result));
  }, [url]);

  return (
    <>
      <div className="carditem">
        {iteminfo.sprites && iteminfo.sprites.default ? (
          <img className="itemimg" src={iteminfo.sprites.default} />
        ) : (
          <img className="itemimg" src="/Assets/img/image0.png" />
        )}
      
      {iteminfo.names && iteminfo.names[7] ? (
        <p>{iteminfo.names[7].name}</p>
      ) : (
        <p>{name}</p>
      )}

      {iteminfo.effect_entries &&
      iteminfo.effect_entries[0] &&
      iteminfo.effect_entries[0].effect ? (
        <p>{iteminfo.effect_entries[0].effect}</p>
      ) : (
        <p>Could not load information on this item, sorry!</p>
      )}
      </div>
    </>
  );
};

export default ItemlistCard;
