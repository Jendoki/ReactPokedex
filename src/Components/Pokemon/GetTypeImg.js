function GetTypeImg(props) {
  let Typeimg = "";

  const getImg = () => {
    const type = props.type;
    switch (type) {
      case "water":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/water.png";
        break;
      case "bug":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/bug.png";
        break;
      case "dark":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/dark.png";
        break;
      case "flying":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/flying.png";
        break;
      case "dragon":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/dragon.png";
        break;
      case "fairy":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/fairy.png";
        break;
      case "electric":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/elec.png";
        break;
      case "fighting":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/fighting.png";
        break;
      case "fire":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/fire.png";
        break;
      case "ghost":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/ghost.png";
        break;
      case "grass":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/grass.png";
        break;
      case "ground":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/ground.png";
        break;
      case "ice":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/ice.png";
        break;
      case "normal":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/normal.png";
        break;
      case "poison":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/poison.png";
        break;
      case "rock":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/rock.png";
        break;
      case "steel":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/steel.png";
        break;
      case "psychic":
        Typeimg = process.env.PUBLIC_URL + "/Assets/img/types/psychic.png";
        break;
    }
    return Typeimg;
  };

  return (
    <>
      <img src={getImg()} />
    </>
  );
}

export default GetTypeImg;
