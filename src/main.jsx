import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NavBar from "./components/NavBar.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  //En el main envolvemos tosos los elementos de la aplicacion en un BrowserRouter pora poder utlizar los elementos del router en cuallquier parte de la app
  <BrowserRouter>
    <NavBar />
    <App />
  </BrowserRouter>,
);
