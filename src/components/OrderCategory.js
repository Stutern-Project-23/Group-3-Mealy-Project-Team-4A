import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

function OrderCategory() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home/deliveryOrder"); // Redirect to the "deliveryOrder" page when component mounts
  }, [navigate]);

  return (
    <section className="categories-section_order">
      <div className="order-types">
        <NavLink to="deliveryOrder" className="order-type">
          Delivery
        </NavLink>
        <NavLink to="pickupOrder" className="order-type">
          Pickup
        </NavLink>
        <NavLink to="bulkOrder" className="order-type">
          Bulk Order
        </NavLink>
      </div>
      <Outlet />
    </section>
  );
}

export default OrderCategory;
