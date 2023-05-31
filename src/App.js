import "./App.css";
// import NewPassword from "./components/NewPassword";
import { createContext } from "react";
import Homepage from "./components/Homepage";
export const homepageContext = createContext();
function App() {
  return (
    <div className="app">
      {/* <NewPassword /> */}

      <Homepage />
    </div>
  );
}

export default App;
