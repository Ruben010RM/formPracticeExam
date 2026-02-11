import "./App.css";
import Form from "./components/Form";
import EmojiGuess from "./components/EmojiGuess/EmojiGuess";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    //Bloque de enrutamiento general para componentes, Routes indca bloque de rutas y route cada ruta y el elemento que se carga al llamarla
    <Routes>
      <Route path="/" element={<Form />}></Route>
      <Route path="/form" element={<Form />}></Route>
      <Route path="/guess-the-films" element={<EmojiGuess />}></Route>
    </Routes>
  );
}
export default App;
