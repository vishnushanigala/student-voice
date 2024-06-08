import "./dashboard1.css";
import "./pending.jpg";
import "./completed.jpg";
import { useState,useEffect } from "react";
import axios from 'axios'
import { NavLink ,useNavigate} from "react-router-dom";
function DashBoardUserComponent() {
  const [complaints, setComplaints] = useState([]);
  const [pending, setPending] = useState([]);
  const [completed, setCompleted] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get(
          "http://localhost:4000/complaint/complaints",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200) {
          setComplaints(response.data);
          setPending(response.data.filter((complaint)=>complaint.status==="pending"));
          
          setCompleted(response.data.filter((complaint)=>complaint.status==="solved"));
          
        } else {
          console.log(response);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="userdashboard">
        <div className="dashboard">
          <div className="pending">
            
            <NavLink to="/pending">
              {" "}
              <img src={require("./pending.jpg")} alt="" />
            </NavLink>
            <h4 id="name">pending Complaints</h4>
            {console.log(pending)}
            <h4 id="value">{pending.length}</h4>
          </div>
          <div className="completed">
            <NavLink to="/completed">
              {" "}
              <img src={require("./completed.jpg")} alt="" />
            </NavLink>
            <h4 id="name">Completed complaints</h4>
            
            <h4 id="value">{completed.length}</h4>
          </div>
        </div>
        <div className="Space">
          <div className="footer-links">
            <div className="link1">
              <h6>CMR E_COMPLIANT BOX</h6>
              <p>
                cmr e-compliant box is NavLink portal which will help to raise
                your complaint.
              </p>
            </div>
            <div className="link2">
              <h6>Useful Links</h6>
              <NavLink to="/userhome">Home</NavLink>
              <NavLink to="/dashboard">Dashboard</NavLink>

              <NavLink to="/contactus">Contact Us</NavLink>
            </div>
            <div className="link3">
              <h6>Contact</h6>
              <h5>cmrcet@gmail.com</h5>
              <h5>+91 1234567894</h5>
              <h5>+91 6304213623</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardUserComponent;
