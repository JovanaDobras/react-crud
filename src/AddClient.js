import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function AddClient() {

    const [client, setClient] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault(); 
    
        fetch("http://localhost:7000/clients", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(client),
        })
          .then(() => {
            setTimeout(() => {
              navigate("/clients");
            }, 500);
          });
      };


  return (


    <div>
        <form className='inputsClient'>
            <input onChange={(e) => setClient({...client, avatar: e.target.value})} type="text" required placeholder='avatar'></input>
            <input onChange={(e) => setClient({...client, client_name: e.target.value})} type="text" required placeholder='client name'></input>
            <input onChange={(e) => setClient({...client, email: e.target.value})} type="text" required placeholder='email'></input>
            <input onChange={(e) => setClient({...client, manager: e.target.value})} type="text" required placeholder='manager'></input>
            <input onChange={(e) => setClient({...client, developers: e.target.value})} type="text" required placeholder='developers'></input>
            <input onChange={(e) => setClient({...client, billing: e.target.value})} type="text" required placeholder='billing'></input>
            <input onChange={(e) => setClient({...client, manager_factor: e.target.value})} type="text" required placeholder='manager factor'></input>
            <input onChange={(e) => setClient({...client, paymentMethod: e.target.value})} type="text" required placeholder='payment method'></input>
            <textarea onChange={(e) => setClient({...client, invoice_data: e.target.value})} type="text" required placeholder='invoice data'></textarea>
            <button type="submit" onClick={(e) => handleSubmit(e)}>Add client</button>
        </form>
    </div>
  )
}

export default AddClient