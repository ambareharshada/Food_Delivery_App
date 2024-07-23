import logo from "../logo.svg";

import { Link } from "react-router-dom";

const HeaderSection = () => {
  return (
    <>
      <div className="container">
        <div className="red">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            {/* <img className="nav-logo" src="" /> */}
            <nav>
              <ul>
                <li>
                  {" "}
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="Menu">Menu</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="ContactUs">Contact Us</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        {/* <div className="green">2</div> */}
        <div className="blue">
          <a type="button" className="cart-button">
            <i className="bi bi-cart3"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
