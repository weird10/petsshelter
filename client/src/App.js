import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Form from './component/Form';
import PetList from './component/PetList';
import NavBar from './component/NavBar';
import OnePet from './component/OnePet';
import EditForm from './component/EditForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/allPets" element={<PetList />} />
        <Route path="/onepet/:id" element={<OnePet />} />
        <Route path="/editpet/:id" element={<EditForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
