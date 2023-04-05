import "./global.scss";
import Home from "./Home";

function Navbar(yomama) {
  const { currentComponent } = yomama;

  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://imgs.search.brave.com/58-tsSnqGtxLnb5Zn4xoNUaBkj_ex1LOG1XrwbYYFEs/rs:fit:256:256:1/g:ce/aHR0cDovL2ltZzEu/d2lraWEubm9jb29r/aWUubmV0L19fY2Iy/MDE1MDQwMjIzNDM0/My9sZWFndWVvZmxl/Z2VuZHMvaW1hZ2Vz/LzEvMTIvTGVhZ3Vl/X29mX0xlZ2VuZHNf/SWNvbi5wbmc"
            width="40px"
            alt="Logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Champions">
                Champions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Post">
                Posts
              </a>
            </li>
          </ul>
          {currentComponent !== Home && (
            <form className="d-flex" role="search">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="btn btn-outline-light"
                  type="submit"
                  id="logobutton"
                >
                  <img src="images/logo.png" alt="logo" id="logo" />
                </button>
              </div>
            </form>
          )}
          <a class="login-btn btn btn-outline-light btn-danger" href="/Login">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
