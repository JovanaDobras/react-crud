import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

function HomePage() {

    let [users, setUsers] = useState();


    useEffect(() => {
        fetch("http://localhost:7000/users")
          .then((response) => {
            if (!response.ok) {
              throw Error("Nešto nije u redu.");
            } else {
              return response.json();
            }
          })
          .then((data) => {
            setUsers(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


  return (
    <div>
        <div>
            <Link to={`/addUser`}>
                <button>Add user</button>
            </Link>
            <Link to={`/clients`}>
                <button>Clients</button>
            </Link>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" className='border-left'>Avatar</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Street</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Status</th>
                    <th scope='col'>Options</th>
                </tr>
            </thead>
            <tbody>
                {users?.map((data, index) => {
                    return (
                        <tr key={index}>
                            <td className='avatar-and-options avatar'>
                                <img src={data?.avatar?.image_path}></img>
                            </td>
                            <td>{data.first_name}</td>
                            <td>{data.last_name}</td>
                            <td>{data.email}</td>
                            <td>{data.street}</td>
                            <td>{data.city}</td>
                            <td>{data.country}</td>
                            <td>{data.status}</td>
                            <td className='avatar-and-options'>
                                <Link to={`/updateUser/${data.id}`}>
                                    <button>Update</button>
                                </Link>
                                <Link to={`/deleteUser/${data.id}`}>
                                    <button>Delete</button>                                
                                </Link>
                                <Link to={`/userProfile/${data.id}`}>
                                    <button>Profile</button>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
              
            </tbody>
</table>
    </div>
  )
}

export default HomePage