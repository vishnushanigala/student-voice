import "./body1.css";
import "./cvr1.jpg";
import "./cvr2.jpg";
import "./complaint.jpg";
import "./anon.jpg";

import { NavLink } from "react-router-dom";
function BodyUserComponent() {
  return (
    <>
      <div className="usercomplaint">
        <div className="raisecomplnt">
          <div className="complaint">
            <NavLink to="/complaint">
            <span id="text">Raise Complaint</span>
              <img src={require("./complaint.jpg")} id="raise-img" />
            </NavLink>
          </div>
          <div className="anonyms">
            <NavLink to="/complaint">
            <span id="text">Anonymous Complaint</span>
              <img src={require("./anon.jpg")} id="anony-img" />
            </NavLink>
          </div>
        </div>
        <div className="about-cvr">
          <div className="cvr-img1">
            <img src={require("./cvr1.jpg")} />
          </div>
          <div className="cvr-img2">
            <img src={require("./cvr2.jpg")} />
          </div>
          <div className="cvr-matter">
            <p id="passage">
              The{" "}
              <NavLink to="https://cmrcet.ac.in/">
                CMR College of Engineering and Technology
              </NavLink>{" "}
              was established in 2002. It is approved by the All India Council
              for Technical Education and accredited by the National Board of
              Accreditation, India.
            </p>
            <p>
              CMR College of Engineering and Technology was affiliated with Jawaharlal Nehru
              Technological University, Hyderabad. The college is located in{" "}
              <NavLink to="https://www.google.com/maps/place/CMR+College+of+Engineering+%26+Technology,+Hyderabad+(CMRCET%2FCMRK)/@17.6046671,78.4865205,15z/data=!4m2!3m1!1s0x0:0x4367e509f5ff38e5?sa=X&ved=1t:2428&ictx=111">
                Kandlakoya
              </NavLink>
              (V),{" "}
              
                Medchal
              
              (M),The College is situated 20 Km away from Secunderabad Railway Station on the Hyderabad - Nagpur National Highway (Medchal Road), Telangana, India
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodyUserComponent;
