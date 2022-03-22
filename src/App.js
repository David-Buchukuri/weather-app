import "./App.css";
import DropBtn from "./components/dropBtn";
import { useEffect, useState } from "react";
let array = [
  { name: "toke", lastName: "buchukuri", age: "21", stack: "sql" },
  { name: "dato", lastName: "buchukuri", age: "19", stack: "sern" },
  { name: "guga", lastName: "gugadze", age: "99", stack: "c" },
];

function App() {
  const [count, setCount] = useState(0);

  const fetchCur = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=tbilisi&units=metric&appid=5f5fced40cc62d51499dacc3c0ca8151" //standard
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const fetchForcast = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat=41.7151&lon=44.8271&units=metric&appid=5f5fced40cc62d51499dacc3c0ca8151" //onecall
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const fetchGeo = () => {
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=tbilisi&limit=1&appid=5f5fced40cc62d51499dacc3c0ca8151"
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  // const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'}
  // let t = new Date(1648112400 * 1000).toLocaleTimeString("en-US",options)
  // console.log(t);

  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log(count);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div className="App">
      {array.map((el, idx) => (
        <div key={idx}>
          <DropBtn data={el} />
        </div>
      ))}

      <button onClick={fetchCur}>fetch current</button>
      <button onClick={fetchGeo}>fetch geo</button>
      <button onClick={fetchForcast}>fetch forecast</button>
    </div>
  );
}

export default App;
