import { Counter, Header } from "@7ools/ui";
import { createRoot } from "react-dom/client";
import "./style.css";
import typescriptLogo from "/typescript.svg";

const App = () => (
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" className="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        src={typescriptLogo}
        className="logo vanilla"
        alt="TypeScript logo"
      />
    </a>
    <span className="text-gray-400">Test Tailwind</span>
    <Header title="Web" />
    <div className="card">
      <Counter />
    </div>
  </div>
);

createRoot(document.getElementById("app")!).render(<App />);
