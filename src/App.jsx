import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddUserForm from './pages/AddUserForm';
import Navbar from './components/Navbar';
import { UserProvider } from './context/UserContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-user" element={<AddUserForm />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
