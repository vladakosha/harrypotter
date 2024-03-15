import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CharacterCard from "./CharacterCard";
import Count from "./Count";
import axios from "axios";

function App() {
  const [wizards, setWizards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const harryApiCall = async () => {
    try {
      const response = await axios.get(
        "https://potterhead-api.vercel.app/api/characters"
      );
      setWizards(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    harryApiCall();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching wizard data: {error.message}</p>;
  }

  return (
    <div style={{ margin: "0 auto" }}>
      <Count />
      <h1 style={{ color: "#aaaaaa" }}>Harry Potter Characters</h1>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {wizards.map((wizard, index) => {
          if (index < 10) {
            return (
              <li key={index} style={{ listStyleType: "none", margin: "30px" }}>
                <CharacterCard wizard={wizard} />
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default App;