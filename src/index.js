import ReactDOM from "react-dom/client";
import { Body } from "./body";
import "./fonts/ZenKakuGothicNew-Light.ttf";
import "./fonts/ZenKakuGothicNew-Medium.ttf";
import "./style.css";

function App() {
  return <Body />;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
