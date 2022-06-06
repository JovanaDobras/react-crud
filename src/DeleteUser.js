import React, {useState, useEffect} from 'react'
import { useParams, Link, useNavigate } from "react-router-dom";


function DeleteUser() {
    
    const {id} = useParams();
    let [user, setUser] = useState();
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`http://localhost:7000/users/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw Error("Nešto nije u redu.");
            } else {
              return response.json();
            }
          })
          .then((data) => {
            setUser(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);



      const Delete = () => {
        fetch(`http://localhost:7000/users/${id}`, {
            method: "DELETE",
        }).then(() => {
            setTimeout(() => {
                navigate("/");
            }, 500);
        });
      };

  return (
    <div className='center-text'>
        <h1>Da li sigurno zelite da obrisete korisnika {user?.first_name} {user?.last_name}</h1>
        <div>
            <button onClick={Delete} className='width'>Yes</button>
            <Link to={`/`} ><button className='width'>No</button></Link>
        </div>
    </div>
  )
}

export default DeleteUser