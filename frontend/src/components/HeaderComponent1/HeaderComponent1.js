import "./head.css";
import './cvr name.webp';
import {NavLink} from 'react-router-dom'
function HeaderComponent() {
  return (
    <>
      <div className="head">
        <img src={require('./cvr name.webp')} width="1510" height="90" />
        &nbsp;&nbsp;&nbsp;
        <nav className="nav-bar">
          <div className="box">
            <div className="box1">
              <NavLink to="/" id="text">Home</NavLink>
            </div>
            <div className="box1">
              <NavLink to="/login" id="text">login </NavLink>
            </div>
            <div className="box1">
              <NavLink to="/signup" id="text">register</NavLink>
            </div>
            <div className="box1">
              <NavLink to="/contact" id="text">Contact us</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeaderComponent;
