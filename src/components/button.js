import mgGlass from "../images/magnifying-glass-solid.svg";

const Button = ({ loading, fetch, city }) => {
  return (
    <button
      className="button"
      disabled={loading || !city}
      onClick={(e) => {
        fetch(city, e);
      }}
    >
      <img
        className={`searchImg ${loading ? "loading" : ""} ${
          !city ? "empty" : ""
        }`}
        src={mgGlass}
        alt="search"
      />
    </button>
  );
};

export default Button;
