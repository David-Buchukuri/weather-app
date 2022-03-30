import Cards from "./cards";
import { useState } from "react";
import dateConvert from "../utils/dateConvert";

const DropBtn = ({ data, fade }) => {
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState();
  const [direction, setDirection] = useState("");
  const [angle, setAngle] = useState("rotate(45deg)");
  const [loadContent, setLoadContent] = useState(false);
  const [fadeBox, setFadeBox] = useState("");

  const handleOpen = () => {
    setDisabled(true);
    if (direction === "card-up") {
      setOpen(true);
      setDirection("card-down");
      setAngle("rotate(225deg)");
      setTimeout(() => setFadeBox("fadeInBox"), 600);
      setTimeout(() => setLoadContent(true), 600);
      setTimeout(() => setDisabled(false), 1000);
    } else if (direction === "card-down") {
      setTimeout(() => setDirection("card-up"), 500);

      setFadeBox("fadeOutBox");
      setTimeout(() => setOpen(false), 1500);
      setAngle("rotate(45deg)");

      setTimeout(() => setLoadContent(false), 500);
      setTimeout(() => setDisabled(false), 1500);
    } else {
      setOpen(true);
      setDirection("card-down");
      setAngle("rotate(225deg)");

      setTimeout(() => setLoadContent(true), 600);
      setTimeout(() => setFadeBox("fadeInBox"), 600);
      setTimeout(() => setDisabled(false), 1000);
    }
  };

  return (
    <div className={`dropBtn ${fade}`}>
      <div className="current-info-wrapper">
        <p>{data.name}</p>
        <p>{dateConvert(data.dt)}</p>
        <span>{data.main.temp}c</span>
        <p>{data.weather[0].description}</p>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
          width="100"
          height="100"
        />
      </div>
      <button
        style={{ transform: angle }}
        disabled={disabled}
        className="arrows"
        onClick={handleOpen}
      ></button>
      {open && (
        <Cards
          data={data}
          loadContent={loadContent}
          direction={direction}
          fadeBox={fadeBox}
        />
      )}
    </div>
  );
};

export default DropBtn;
