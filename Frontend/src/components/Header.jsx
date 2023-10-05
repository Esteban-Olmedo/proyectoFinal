
const Header = () => {
    return (
        <header>
        <nav className="navbar">
            <h1>FUNNY SOCKS</h1>
            <ul className="navbar-links">
            {/* <li>
            <Link to="/home">Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/contactos">Contactos</Link>
          </li> */}
            </ul>
        </nav>
        <div className="logo">
                <img src="LogoSample.jpg" alt="logo" className="logosample"/>
                <img src="LogoSample.jpg" alt="logo" className="logosample"/>
                <img src="LogoSample.jpg" alt="logo" className="logosample"/>
            </div>

    </header>
    );
};

export default Header;