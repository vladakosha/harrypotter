import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          width:'100%',
          justifyContent: "space-between",
          padding: '20px',
          backgroundColor: 'white'
        }}
      >
        <Link to="/" style={{color: 'black'}}>HP characters</Link>
        <Link to="/beasts" style={{color: 'black'}}>Catch the beast</Link>
        <Link to="/spell" style={{color: 'black'}}>Create a spell</Link>
      </div>
    </>
  );
};

export default NavBar;
