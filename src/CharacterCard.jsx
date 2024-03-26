const CharacterCard = ({ wizard }) => {
  const { name, house, patronus } = wizard;

  const colorPalettes = {
    Gryffindor: {
      name: "#c8c941",
      house: "#000000",
      patronus: "#000000",
      background: "#873c3c",
    },
    Slytherin: {
      name: "#dbdddc",
      house: "#acadaf",
      patronus: "#acadaf",
      background: "#1e7352",
    },
    Ravenclaw: {
      name: "#bdab8f",
      house: "#bdab8f",
      patronus: "#bdab8f",
      background: "#424e78",
    },
    Hufflepuff: {
      name: "#372e29",
      house: "#726255",
      patronus: "#726255",
      background: "#f0c75e",
    },
  };

  const palette = colorPalettes[house] || colorPalettes["Gryffindor"];

  const harryPotterWiki = (characterName) => {
    return `https://harrypotter.fandom.com/wiki/${characterName
      .replace(/\s+/g, "_")
      .toLowerCase()}`;
  };

  const wikiUrl = harryPotterWiki(name);

  return (
    <a
      href={wikiUrl}
      target="_blank"
      rel=""
      style={{textDecoration: "none"}}
    >
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
        {/* <img src={image} alt="" style={{ width: "75px" }} /> */}
        <h2 style={{ color: palette.name }}>{name}</h2>
        <p style={{ color: palette.house }}>House: {house}</p>
        <p style={{ color: palette.patronus }}>Patronus: {patronus}</p>
      </div>
    </a>
  );
};

export default CharacterCard;
