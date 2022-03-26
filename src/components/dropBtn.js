import Card from "./card";
import { useState } from "react";

const DropBtn = ({ data, fade }) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState();
  const [direction, setDirection] = useState("");
  const [angle, setAngle] = useState("rotate(45deg)");
  const [loadContent, setLoadContent] = useState(false);

  const handleOpen = () => {
    setDisabled(true);
    if (direction === "card-up") {
      setOpen(true);
      setDirection("card-down");
      setAngle("rotate(225deg)");
      setTimeout(() => setLoadContent(true), 600);
    } else if (direction === "card-down") {
      setDirection("card-up");
      setTimeout(() => setOpen(false), 1000);
      setAngle("rotate(45deg)");
      setTimeout(() => setLoadContent(false), 100);
    } else {
      setOpen(true);
      setDirection("card-down");
      setAngle("rotate(225deg)");

      setTimeout(() => setLoadContent(true), 600);
    }
    setTimeout(() => setDisabled(false), 1000);
  };

  return (
    <div className={`dropBtn ${fade}`}>
      <p>
        {data.name} {data.main.temp}c {data.weather[0].description}
      </p>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        alt=""
      />
      <button
        style={{ transform: angle }}
        disabled={disabled}
        className="arrows"
        onClick={handleOpen}
      ></button>
      {open && (
        <Card
          data={data}
          loadContent={loadContent}
          bgCol="aqua"
          direction={direction}
        />
      )}
    </div>
  );
};

export default DropBtn;
