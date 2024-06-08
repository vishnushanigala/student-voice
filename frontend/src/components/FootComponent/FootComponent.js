import "./foot.css";
import { NavLink } from "react-router-dom";
function FootComponent() {
  return (
    <>
      <div class="footer">
        <NavLink href="https://www.instagram.com/" target="-main">
          <i class="fa-brands fa-instagram"></i>
        </NavLink>
        <NavLink href="https://www.facebook.com/" target="-main">
          <i class="fa-brands fa-facebook"></i>
        </NavLink>
        <NavLink href="https://twitter.com/?lang=en" target="-main">
          <i class="fa-brands fa-twitter"></i>
        </NavLink>
        <NavLink href="https://www.youtube.com/" target="-main">
          <i class="fa-brands fa-youtube"></i>
        </NavLink>
        <NavLink href="https://in.linkedin.com/" target="-main">
          <i class="fa-brands fa-linkedin"></i>
        </NavLink>
        <p>Copyright © 2024 Cmr College Of Engineering and Technology. All Rights Reserved</p>
      </div>
    </>
  );
}

export default FootComponent;
