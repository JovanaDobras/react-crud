import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Clients() {

    let [clients, setClients] = useState();

    useEffect(() => {
        fetch("http://localhost:7000/clients")
          .then((response) => {
            if (!response.ok) {
              throw Error("Nešto nije u redu.");
            } else {
              return response.json();
            }
          })
          .then((data) => {
            setClients(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);


  return (
    <div>
        <div>
            <Link to={`/addClient`}>
                <button>Add client</button>
            </Link>
        </div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Avatar</th>
                <th scope="col">Billing</th>
                <th scope="col">Client name</th>
                <th scope="col">Developers</th>
                <th scope="col">Email</th>
                <th scope="col">Manager</th>
                <th scope="col">Payment Method</th>
                <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                {clients?.map((data, index) => {
                    return(
                        <tr key={index}>
                            <td className='avatar-and-options avatar'>
                                <img src={data.avatar}></img>
                            </td>
                            <td>{data.billing}</td>
                            <td>{data.client_name}</td>
                            <td>{data.developers}</td>
                            <td>{data.email}</td>
                            <td>{data.manager}</td>
                            <td>{data.paymentMethod}</td>
                            <td>
                                <Link to={`/updateClient/${data.id}`}>
                                    <button>Update</button>
                                </Link>
                                <Link to={`/deleteClient/${data.id}`}>
                                    <button>Delete</button>
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

export default Clients