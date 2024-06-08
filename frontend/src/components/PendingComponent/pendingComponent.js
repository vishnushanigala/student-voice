import "./pending.css";

import { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
function PendingComponent() {
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
          setPending(
            response.data.filter((complaint) => complaint.status === "pending")
          );

          setCompleted(
            response.data.filter((complaint) => complaint.status === "solved")
          );
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
      <div class="UserPending">
        <pre id="Pending">{">Pending Complaints"}</pre>
        <hr />
        {console.log(pending)}
        {pending.map((complaint) => (
          <div class="flex">
            <div class="card1">
              <pre>USERID : {complaint.userId}</pre>

              <pre>CATEGORY : {complaint.category}</pre>
              <pre>NATURE OF COMPLAINT : {complaint.nature} </pre>
              <pre>DESCRIPTION : {complaint.description} </pre>

              <button>View Image </button>
            </div>
            <div class="view">
              <img id="complaint" src={complaint.image} alt="not found" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PendingComponent;
