import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Body">
        <Weather />
      </div>
      <footer>
        This project was coded by Nicole Frei.{" "}
        <a
          href="https://github.com/nicolefrei8/react-mango-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://clever-lumiere-b5dc48.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          hosted on Netlify.
        </a>
      </footer>
    </div>
  );
}
