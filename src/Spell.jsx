import { useState } from "react";

const Spell = () => {
  const [lumos, setLumos] = useState(true);

  const toggleLumos = () => {
    setLumos(!lumos);
  };

  return (
    <div>
      {lumos ? <h1 style={{ color: "black", backgroundColor: 'white', padding: '30px', width: '600px' }}>Lumos!</h1> : <h1>Nox!</h1>}
      <button onClick={toggleLumos}>Create a spell</button>
    </div>
  );
};

export default Spell;
