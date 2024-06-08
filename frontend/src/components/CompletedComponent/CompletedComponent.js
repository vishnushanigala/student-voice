import "./completed.css";

import { useState,useEffect } from "react";
import axios from 'axios'
import { NavLink ,useNavigate} from "react-router-dom";
function CompletedComponent() {
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
      <div class="UserCompleted">
    <pre id="Pending">{">Completed Complaints"}</pre>
    <hr/>

    {completed.map((complaint)=>(
        <div class="flex"> 
        <div class="card1">
            <pre>USERID                  -     {complaint.userId}</pre>
           
            <pre>CATEGORY                -     {complaint.category}</pre>
            <pre>NATURE OF COMPLAINT     -     {complaint.nature} </pre>
            <pre>DESCRIPTION             -     {complaint.description} </pre>
             <pre>STATUS                 -     {complaint.status}</pre>
               <button>View Image </button> 
               
        </div>
        <div class="view">
            <img id="complaint" src={complaint.image} alt=""/>
        </div>
        </div>
    ))}
    
    </div>
    </>
  );
}

export default CompletedComponent;
