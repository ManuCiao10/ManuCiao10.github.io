import logo from "../img/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="header-right">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default Header;
