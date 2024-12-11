import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";
import Read from "./components/Read";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <BrowserRouter>
      {/* jai défini un système de routage, mes routes, dont chaque route(chemin)
      associe à son composant aprés la déclaration de mes routes dans mon APP web
      je peux naviguer vers les composants sans charger la page avec
       link*/}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
