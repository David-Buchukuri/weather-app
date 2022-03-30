import dateConvert from "../utils/dateConvert";

const Card = ({ data, city }) => {
  return (
    <div className="forcast-card">
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="icon"
        />
      </div>
      <p>{city}</p>
      <p>{dateConvert(data.dt)}</p>
      <p>
        day: <span>{data.temp.day}c</span>
      </p>
      <p>
        night: <span>{data.temp.night}c</span>
      </p>
      <p>{data.weather[0].description}</p>
    </div>
  );
};

export default Card;
