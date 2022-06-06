import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";


function UpdateUser() {

    const {id} = useParams();

    let [user, setUser] = useState();


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



      function EditUser(id, e){
        e.preventDefault();
    
        fetch(`http://localhost:7000/users/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(user),
        })
        .then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        });
      }

  return (

    <div>
        <form className="inputs">

            <input defaultValue={user?.first_name} onChange={(e) => setUser({...user, first_name: e.target.value})} type="text" placeholder="First name" required></input>
            
            <input defaultValue={user?.last_name} onChange={(e) => setUser({...user, last_name: e.target.value})} type="text" placeholder="Last name" required></input>
            
            <input defaultValue={user?.email} onChange={(e) => setUser({...user, email: e.target.value})} type="text" placeholder="Email" required></input>
            
            <input defaultValue={user?.city} onChange={(e) => setUser({...user, city: e.target.value})} type="text" placeholder="City" required></input>
            
            <input defaultValue={user?.country} onChange={(e) => setUser({...user, country: e.target.value})} type="text" placeholder="Country" required></input>
            
            <input defaultValue={user?.phone} onChange={(e) => setUser({...user, phone: e.target.value})} type="text" placeholder="Phone" required></input>
            
            <input defaultValue={user?.ptt} onChange={(e) => setUser({...user, ptt: e.target.value})} type="text" placeholder="Ptt" required></input>
            
            <input defaultValue={user?.role} onChange={(e) => setUser({...user, role: e.target.value})} type="text" placeholder="Role" required></input>
            
            <input defaultValue={user?.status} onChange={(e) => setUser({...user, status: e.target.value})} type="text" placeholder="Status" required></input>
            
            <input defaultValue={user?.street} onChange={(e) => setUser({...user, street: e.target.value})} type="text" placeholder="Street" required></input>
            
            <input defaultValue={user?.password} onChange={(e) => setUser({...user, password: e.target.value})} type="text" placeholder="Password" required></input>
            
            <input defaultValue={user?.tekuci_racun} onChange={(e) => setUser({...user, tekuci_racun: e.target.value})} type="text" placeholder="Tekuci racun" required></input>

            <button type='sumbit' onClick={(event) => EditUser(user?.id, event)}>Update user</button>
        </form>
    </div>
  )
}

export default UpdateUser