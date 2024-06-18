import ReactDOM from "react-dom/client";
import { Body } from "./body";
import "./style.css";

function App() {
  return <Body />;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
