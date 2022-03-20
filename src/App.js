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

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      console.log(count);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div className="App">
      {array.map((el) => (
        <div>
          <DropBtn data={el} />
        </div>
      ))}

      <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
