import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";


function UserProfile() {

    const {id} = useParams();

    let [userProfile, setUserProfile] = useState();

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
            setUserProfile(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


  return (
    <div>
       <h1>Profil korisnika {userProfile?.first_name} {userProfile?.last_name}</h1>
       <p>Email: {userProfile?.email}</p>
       <p>Country: {userProfile?.country}</p>
       <p>City: {userProfile?.city}</p>
       <p>Phone: {userProfile?.phone}</p>
       <p>Ptt: {userProfile?.ptt}</p>
       <p>Role: {userProfile?.role}</p>
       <p>Status: {userProfile?.status}</p>
       <p>Street: {userProfile?.street}</p>

    </div>
  )
}

export default UserProfile