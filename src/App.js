import "./styles/App.css";
import { useState } from "react";
import Button from "./components/button";
import Dropbtn from "./components/dropBtn";

function App() {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [curData, setCurData] = useState(null);
  const [fade, setFade] = useState("");

  const fetchCur = (location) => {
    setTimeout(() => setCurData(null), 1000);

    setFade("fadeOut");
    setTimeout(() => setError(null), 1000);

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
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
          setFade("fadeIn");
        });
    }, 2000);
  };

  return (
    <div className="parent">
      <div className="wrapper">
        <div className="search">
          <div className="searchBar-wrapper">
            <input
              placeholder="enter city name..."
              type="text"
              onChange={(e) => setCity(e.target.value)}
            />

            <Button loading={loading} fetch={fetchCur} city={city} />
          </div>
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
