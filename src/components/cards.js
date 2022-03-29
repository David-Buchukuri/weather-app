import { useEffect, useState } from "react";
import Card from "./card";

const Cards = ({ bgCol, direction, loadContent, data, fadeBox }) => {
  const [forcast, setForcast] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${data.coord.lat}&lon=${data.coord.lon}&units=metric&appid=5f5fced40cc62d51499dacc3c0ca8151` //onecall
    )
      .then((res) => {
        if (!res.ok) throw new Error("something went wrong");
        return res.json();
      })
      .then((res) => {
        res.daily.shift();
        res.daily.pop();

        setForcast(res.daily);
        console.log(res.daily);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);

  const displayForcast = () => {
    return forcast.map((el, idx) => {
      return <Card key={idx} data={el} city={data.name} />;
    });
    // console.log(forcast);
  };

  return (
    <div className={`card ${direction}`} style={{ backgroundColor: bgCol }}>
      {loadContent && forcast && (
        <div className={`card-content-wrapper ${fadeBox}`}>
          {displayForcast()}
        </div>
      )}
    </div>
  );
};

export default Cards;
