import mgGlass from "../images/magnifying-glass-solid.svg";

const Button = ({ loading, fetch, city }) => {
  return (
    <button
      className="button"
      disabled={loading}
      onClick={() => {
        console.log("clicked");
        fetch(city);
      }}
    >
      <img
        className={`searchImg ${loading ? "spining" : ""}`}
        src={mgGlass}
        alt="search"
      />
    </button>
  );
};

export default Button;
