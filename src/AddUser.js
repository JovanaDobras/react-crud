import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddUser() {

    const [addUser, setAddUser] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch("http://localhost:7000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(addUser),
        })
        .then(() => {
            setTimeout(() => {
                navigate("/");
            }, 500);
        });
    };

  return (


    <div>
        <form className="inputs">
            <input onChange={(e) => setAddUser({...addUser, avatar: e.target.value})} type="text" required placeholder='Avatar'></input>
            <input onChange={(e) => setAddUser({...addUser, first_name: e.target.value})} type="text" required placeholder='First name'></input>
            <input onChange={(e) => setAddUser({...addUser, last_name: e.target.value})} type="text" required placeholder='Last name'></input>
            <input onChange={(e) => setAddUser({...addUser, email: e.target.value})} type="text" required placeholder='Email'></input>
            <input onChange={(e) => setAddUser({...addUser, city: e.target.value})} type="text" required placeholder='City'></input>
            <input onChange={(e) => setAddUser({...addUser, country: e.target.value})} type="text" required placeholder='Country'></input>
            <input onChange={(e) => setAddUser({...addUser, phone: e.target.value})}type="text" required placeholder='Phone'></input>
            <input onChange={(e) => setAddUser({...addUser, ptt: e.target.value})} type="text" required placeholder='Ptt'></input>
            <input onChange={(e) => setAddUser({...addUser, role: e.target.value})} type="text" required placeholder='Role'></input>
            <input onChange={(e) => setAddUser({...addUser, status: e.target.value})} type="text" required placeholder='Status'></input>
            <input onChange={(e) => setAddUser({...addUser, street: e.target.value})} type="text" required placeholder='Street'></input>
            <input onChange={(e) => setAddUser({...addUser, password: e.target.value})} type="text" required placeholder='Password'></input>
            <input onChange={(e) => setAddUser({...addUser, tekuci_racun: e.target.value})} type="text" required placeholder='Tekuci racun'></input>

            <div>
                <button type="submit" onClick={(e) => handleSubmit(e)}>Add user</button>
            </div>
        </form>
    </div>
  )
}

export default AddUser