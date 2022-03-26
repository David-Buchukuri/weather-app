import "./App.css";
// import useGetSetData from "./helper/getSetData";
import { useState } from "react";
import Button from "./components/button";
import Dropbtn from "./components/dropBtn";

function App() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [curData, setCurData] = useState(null);
  const [fade, setFade] = useState();

  const fetchCur = (location) => {
    setTimeout(() => setCurData(null), 1000);

    setFade("fadeOut");
    setError(null);
    setLoading(true);
    setTimeout(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5f5fced40cc62d51499dacc3c0ca8151` //standard
      )
        .then((res) => {
          if (!res.ok) throw new Error(res.statusText);
          return res.json();
        })
        .then((res) => {
          setLoading(false);
          setCurData(res);

          console.log(res);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        })
        .finally(() => setFade("fadeIn"));
    }, 2000);
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div className="parent">
      <div className="wrapper">
        {console.log(
          new Date(1648112400 * 1000).toLocaleTimeString("en-US", options)
        )}

        <div class="search">
          <input type="text" onChange={(e) => setCity(e.target.value)} />
          <Button loading={loading} fetch={fetchCur} city={city} />
        </div>
        <div className="dropdown-wrapper">
          {curData && <Dropbtn fade={fade} data={curData} />}
        </div>

        {error && <div class={fade}>something went wrong</div>}
      </div>
    </div>
  );
}

export default App;

// const fetchForcast = () => {
//   fetch(
//     "https://api.openweathermap.org/data/2.5/onecall?lat=41.7151&lon=44.8271&units=metric&appid=5f5fced40cc62d51499dacc3c0ca8151" //onecall
//   )
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

// const fetchGeo = () => {
//   fetch(
//     "http://api.openweathermap.org/geo/1.0/direct?q=tbilisi&limit=1&appid=5f5fced40cc62d51499dacc3c0ca8151"
//   )
//     .then((res) => res.json())
//     .then((res) => console.log(res));
// };

// //date conversion to string
// const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'}
// let t = new Date(1648112400 * 1000).toLocaleTimeString("en-US",options)
// console.log(t);
