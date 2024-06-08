import "./contact.css";
import "./support.png";

import { NavLink } from "react-router-dom";
function ContactComponent() {
  return (
    <>
      <div class="contactus">
        <div class="support">
          <div class="support-img">
            <img src={require('./support.png')} />
          </div>
          <div>
            <span>Fell free to ask us!</span>
            <br />
            <input type="text" placeholder="Name" id="name" />
            <br />
            <input type="email" placeholder="Email Address" id="email" />
            <br />
            <input type="text" placeholder="Phone Number" id="ph-no" />
            <br />
            <input type="textarea" placeholder="Query" id="query" />
            <br />
            <input type="submit" id="submit" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactComponent;
