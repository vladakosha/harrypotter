import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [lumos, setLumos] = useState(true);
  const [name, setName] = useState("Wizard");

  const incrementByOne = () => {
    setCount(count + 1);
  };

  const incrementByTen = () => {
    setCount(count + 10);
  };

  const decrementByOne = () => {
    setCount(count - 1);
  };

  const decrementByTen = () => {
    setCount(count - 10);
  };

  const toggleLumos = () => {
    setLumos(!lumos);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    setName(event.target[0].value);
  }

  return (
    <div>
      <h2>You caught {count} fantastic beasts</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "35px",
        }}
      >
        <button onClick={incrementByOne}>Catch 1 Beast</button>
        <button onClick={incrementByTen}>Catch 10 Beasts</button>
        <button onClick={decrementByOne}>Release 1 Beast</button>
        <button onClick={decrementByTen}>Release 10 Beasts</button>
      </div>
      <div
        style={{
          background: lumos ? "white" : "black",
        }}
      >
        {lumos ? <h1 style={{ color: "black" }}>Lumos!</h1> : <h1>Nox!</h1>}
        <button onClick={toggleLumos}>Create a spell</button>
        <form action="" onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" name="" id="" />
        </form>
        {name}
      </div>
    </div>
  );
};

export default Count;
