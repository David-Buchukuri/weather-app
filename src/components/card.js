const Card = ({ bgCol, direction, loadContent, data }) => {
  return (
    <div className={`card ${direction}`} style={{ backgroundColor: bgCol }}>
      {loadContent && (
        <div className="card-content-wrapper">
          {/* <p>name: {data.name}</p>
          <p>lastName: {data.lastName} </p>
          <p>age: {data.age}</p>
          <p>stack: {data.stack}</p> */}
          <p>forcats here</p>
        </div>
      )}
    </div>
  );
};

export default Card;
