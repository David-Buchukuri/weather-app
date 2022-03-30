import { useEffect, useState } from "react";
import Card from "./card";

const Cards = ({ direction, loadContent, data, fadeBox }) => {
  const [forcast, setForcast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&appid=${process.env.REACT_APP_KEY}` //onecall
    )
      .then((res) => {
        if (!res.ok)
          throw new Error("something went wrong, try again later 😢");
        return res.json();
      })
      .then((res) => {
        res.daily.shift();
        res.daily.pop();
        setForcast(res.daily);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [data]);

  const displayForcast = () => {
    if (forcast) {
      return forcast.map((el, idx) => {
        return <Card key={idx} data={el} city={data.name} />;
      });
    } else if (error) {
      return (
        <p className="display-message">
          something went wrong, try again later 😶
        </p>
      );
    } else {
      return <p className="display-message">loading...</p>;
    }
  };

  return (
    <div className={`card ${direction}`}>
      {loadContent && (
        <div className={`card-content-wrapper scroll-bar ${fadeBox}`}>
          {displayForcast()}
        </div>
      )}
    </div>
  );
};

export default Cards;
