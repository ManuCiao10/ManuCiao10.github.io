import logo from "../img/favicon.png";

function Header() {
  return (
    <div className="header-left">
      <img className="logo" src={logo} alt="Logo" draggable="false" />
    </div>
  );
}

export default Header;
