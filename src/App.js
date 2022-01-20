import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from "./Componets/Login/Login"
import Register from "./Componets/Register/Register";
import Home from "./Componets/Home/Home";
import "./App.css";
import ProtectedRoute from "./Componets/ProtectedRoutes/ProtectedRoutes";
// import Vehicles from "./Componets/Vehicles/Vehicles";


function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          

          <Route exact element={<Login />} path="/login" />
          <Route exact element={<Register />} path="/register" />

          <Route element={<ProtectedRoute/>}>
            <Route element={<Home />} path="*" />
          </Route>

        </Routes>

      </Router>


    </div>
  );
}

export default App;
