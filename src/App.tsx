import { useRoutes } from "react-router-dom";
import "./App.css";

import Routes from "./components/routes/Routes";

function App() {
  const elements = useRoutes(Routes);
  return elements;
}

export default App;
