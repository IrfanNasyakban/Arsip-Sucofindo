import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import LogoSucofindo from "../assets/LogoSucofindo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      {/* <!-- Container wrapper --> */}
      <div className="container">
        {/* <!-- Toggle button --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* <!-- Collapsible wrapper --> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Navbar brand --> */}
          <a className="navbar-brand mt-2 mt-lg-0" href="/dashboard">
            <img
              src={LogoSucofindo}
              height="55"
              alt="SucoFindo"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
