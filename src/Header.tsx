import logo from "../img/favicon.png";

function Header() {
  return (
    <header className="header-full-size">
      <div className="header-size-less">
        <div className="header-nice-formatted">
          <div className="header-left">
            <a className="block-link" href="/">
              <img className="logo" src={logo} alt="Logo" draggable="false" />
            </a>
          </div>
          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center space-x-4">
              <li>
                <a
                  data-tip
                  data-for="email"
                  href="mailto:emanuele.ardinghi@gmail.com"
                  className="btn-sm "
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
