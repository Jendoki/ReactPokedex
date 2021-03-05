import { useState, useEffect } from "react";

const ShowEvoline = (props) => {
  const url = props.url;
  const [evoline, setEvoline] = useState([]);

  const getLine = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  };

  useEffect(() => {
    getLine(url).then((result) => setEvoline(result));
  }, [url]);

  console.log(evoline);

  return <></>;
};

export default ShowEvoline;
