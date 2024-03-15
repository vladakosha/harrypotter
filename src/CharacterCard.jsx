const CharacterCard = ({ wizard }) => {
  const { name, house, image } = wizard;

  const colorPalettes = {
    Gryffindor: {
      name: "#c8c941",
      house: "#000000",
      role: "#000000",
      background: "#873c3c",
    },
    Slytherin: {
      name: "#dbdddc",
      house: "#acadaf",
      role: "#acadaf",
      background: "#1e7352",
    },
    Ravenclaw: {
      name: "#bdab8f",
      house: "#bdab8f",
      role: "#bdab8f",
      background: "#424e78",
    },
    Hufflepuff: {
      name: "#372e29",
      house: "#726255",
      role: "#726255",
      background: "#f0c75e",
    },
  };

  const palette = colorPalettes[house] || colorPalettes["Gryffindor"];

  return (
    <div
      style={{
        width: "200px",
        height: "250px",
        padding: "5px",
        margin: "10px",
        border: "1px solid #bebebe",
        borderRadius: "5px",
        textAlign: "center",
        backgroundColor: palette.background,
      }}
    >
      <img src={image} alt="" style={{ width: "75px" }} />
      <h2 style={{ color: palette.name }}>{name}</h2>
      <p style={{ color: palette.house }}>House: {house}</p>
    </div>
  );
};

export default CharacterCard;
