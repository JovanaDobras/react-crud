import React, {useState, useEffect} from 'react'
import { useParams , Link, useNavigate} from 'react-router-dom'

function DeleteClient() {

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

      const Delete = () => {
        fetch(`http://localhost:7000/clients/${id}`, {
            method: "DELETE",
        }).then(() => {
            setTimeout(() => {
                navigate("/clients");
            }, 500);
        });
      };

  return (
    <div className='center-text'>
        <h1>Da li sigurno zelite da obrisete klienta {client?.client_name}</h1>
        <div>
            <button onClick={Delete} className='width'>Yes</button>
            <Link to={`/clients`} ><button className='width'>No</button></Link>
        </div>
    </div>
  )
}

export default DeleteClient