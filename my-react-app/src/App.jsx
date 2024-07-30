import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Logo from "./components/Logo";
import "./styles/base.css";
import "./styles/Animaciones.css";
import cangrejo from './assets/cangrejo.jpg';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a>
          <img src={cangrejo} className="logo animarCangrejo react" alt="Vite logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <Logo />
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react animacion-spin" alt="React logo" />
        </a>
      </div>
      <form>
            <label className="highlight" htmlFor="name">Nombre:</label><br />
            <input type="text" id="name" name="name" /><br /><br />
            <label htmlFor="email">Email:</label><br />
            <input type="email" id="email" name="email" /><br /><br />
            <label htmlFor="message">Mensaje:</label><br />
            <textarea id="message" name="message" rows={4} cols={50}></textarea><br /><br />
            <input type="submit" value="Enviar" />
      </form>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="highlight" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
