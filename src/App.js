// // import NewPassword from "./components/NewPassword";
import Homepage from "./components/Homepage";



import DeliveryOrder from "./components/DeliveryOrder";
import BulkOrder from "./components/BulkOrder";
// import OrderCategory from "./components/OrderCategory";
import PickUpOrder from "./components/PickUpOrder";
// import Login from "./components/Login"
import LandingPage from "./components/LandingPage";
import RestuarantMenu from "./components/RestuarantMenu/RestuarantMenu";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {loader as DeliveryRestaurantLoader} from "./components/DeliveryOrder"
import {loader as PickUpOrderLoader} from "./components/PickUpOrder"
import {loader as BulkOrderLoader} from "./components/BulkOrder"




import Layout from "./utilities/Layout";
import Checkout from "./components/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {path:"checkout",element:<Checkout/>},
  {
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Homepage />,
        children: [
          { path: "deliveryOrder", element: <DeliveryOrder />,loader:DeliveryRestaurantLoader },
          { path: "bulkOrder", element: <BulkOrder />,loader:BulkOrderLoader},
          { path: "pickupOrder", element: <PickUpOrder />, loader:PickUpOrderLoader },
        ],
      },
      { path: "menu/", element: <RestuarantMenu /> },
    ],
  },
  {path:"menu/checkout",element:<Checkout/>}
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
