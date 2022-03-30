import mgGlass from "../images/magnifying-glass-solid.svg";

const Button = ({ loading, fetch, city }) => {
  return (
    <button
      className="button"
      disabled={loading}
      onClick={() => {
        fetch(city);
      }}
    >
      <img
        className={`searchImg ${loading ? "loading" : ""}`}
        src={mgGlass}
        alt="search"
      />
    </button>
  );
};

export default Button;
