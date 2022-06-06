import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UpdateClient() {

    const {id} = useParams();
    const [client, setClient] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:7000/clients/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw Error("Nešto nije u redu.");
            } else {
              return response.json();
            }
          })
          .then((data) => {
            setClient(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      function EditClient(id, e){
        e.preventDefault();
    
        fetch(`http://localhost:7000/clients/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(client),
        })
        .then(() => {
          setTimeout(() => {
            navigate("/clients");
          }, 500);
        });
      }

  return (

    <div>
        <form className='inputsClient'>
            <input defaultValue={client?.avatar} onChange={(e) => setClient({...client, avatar: e.target.value})} type="text" required></input>
            <input defaultValue={client?.client_name} onChange={(e) => setClient({...client, client_name: e.target.value})} type="text" required></input>
            <input defaultValue={client?.email} onChange={(e) => setClient({...client, email: e.target.value})} type="email" required></input>
            <input defaultValue={client?.manager} onChange={(e) => setClient({...client, manager: e.target.value})} type="text" required></input>
            <input defaultValue={client?.developers} onChange={(e) => setClient({...client, developers: e.target.value})} type="text" required></input>
            <input defaultValue={client?.billing} onChange={(e) => setClient({...client, billing: e.target.value})} type="text" required></input>
            <input defaultValue={client?.manager_factor} onChange={(e) => setClient({...client, manager_factor: e.target.value})} type="text" required></input>
            <input defaultValue={client?.paymentMethod} onChange={(e) => setClient({...client, paymentMethod: e.target.value})} type="text" required></input>

            <textarea defaultValue={client?.invoice_data} onChange={(e) => setClient({...client, invoice_data: e.target.value})} rows={7}></textarea>

            <button onClick={(e) => EditClient(client.id, e)}>Update client</button>

        </form>
    </div>
  )
}

export default UpdateClient