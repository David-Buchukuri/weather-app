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

  const fetchCur = (location, e) => {
    if (e.type === "click" || (e.type === "keypress" && e.code === "Enter")) {
      setTimeout(() => setCurData(null), 1000);

      setFade("fadeOut");
      setTimeout(() => setError(null), 1000);

      setLoading(true);
      setTimeout(() => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_KEY}` //standard
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
    }
  };

  return (
    <div className="parent">
      <div className="wrapper">
        <div className="search">
          <div className="searchBar-wrapper">
            <input
              placeholder="enter city/country..."
              type="text"
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={(e) => {
                fetchCur(city, e);
              }}
            />

            <Button loading={loading} fetch={fetchCur} city={city} />
          </div>
        </div>
        <div className="dropdown-wrapper">
          {curData && <Dropbtn fade={fade} data={curData} />}
        </div>

        {error && (
          <p className={`display-message ${fade}`}>
            something went wrong, try again later 😶
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
