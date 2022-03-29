const Card = ({ data, city }) => {
  // //date conversion to string
  // const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'}
  const toDate = (time) => new Date(time * 1000).toLocaleDateString();

  return (
    <div className="forcast-card">
      <div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="icon"
        />
      </div>
      <p>city: {city}</p>
      <p>date: {toDate(data.dt)}</p>
      <p>day: {data.temp.day}c</p>
      <p>night: {data.temp.night}c</p>
      <p>{data.weather[0].description}</p>
    </div>
  );
};

export default Card;
