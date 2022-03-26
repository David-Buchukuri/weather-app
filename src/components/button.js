const Button = ({ loading, fetch, city }) => {
  return (
    <button disabled={loading} onClick={() => fetch(city)}>
      {loading ? "loading" : "fetch cur"}
    </button>
  );
};

export default Button;
