import "./App.css";
import NewPassword from "./components/NewPassword";
import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Activation from "./components/Activation";
import DeliveryAddress from "./components/DeliveryAddress";

import "./styles/activation.css";

function App() {
  return (
    <div className="app">
      {/* <NewPassword /> */}
      {/* <SignUp/> */}
      {/* <Homepage /> */}
      {/* <ForgotPassword/> */}
      <DeliveryAddress/>
      {/* <Activation /> */}
      {/* <p>{value}</p>
      <button onClick={incrementValue}>increment</button> */}
  
        

    </div>
  );
}

export default App;
