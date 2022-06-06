import logo from './logo.svg';
import './App.css';
import { AppProvider } from './context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import UpdateUser from './UpdateUser';
import DeleteUser from './DeleteUser';
import AddUser from './AddUser';
import UserProfile from './UserProfile';
import Clients from './Clients';
import UpdateClient from './UpdateClient';
import DeleteClient from './DeleteClient';
import AddClient from './AddClient';


function App() {
  return (
    <div className="App">

    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomePage />} />
          <Route path="/updateUser/:id" element={<UpdateUser />} />
          <Route path="/deleteUser/:id" element={<DeleteUser />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/userProfile/:id" element={<UserProfile />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/updateClient/:id' element={<UpdateClient />} />
          <Route path='/deleteClient/:id' element={<DeleteClient />} />
          <Route path='/addClient' element={<AddClient />} />

        </Routes>
      </BrowserRouter>
    </AppProvider>

    </div>
  );
}

export default App;
