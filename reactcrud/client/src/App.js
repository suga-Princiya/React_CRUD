// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./Components/Users";
import AddUser from "./Components/AddUser";
import UpdateUser from "./Components/UpdateUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
