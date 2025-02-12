import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendurl, currency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import Titleadmin from "../Components/Title";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);

  const fetchallorders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendurl + "/api/order/list",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const statushandler = async (event, orderid) => {
    try {
      const response = await axios.post(
        backendurl + "/api/order/status",
        { orderid, status: event.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchallorders();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchallorders();
  }, [token]);

  // Filter orders before calculating statistics
  const filteredOrders = orders.filter(
    (order) => !(order.payment === false && order.paymentmethod === "razorpay")
  );

  // Calculate order statistics based on filtered orders
  const totalOrders = filteredOrders.length;
  const notShippedOrders = filteredOrders.filter(
    (order) =>
      order.status !== "shipped" &&
      order.status !== "out for delivery" &&
      order.status !== "delivered"
  ).length;
  const shippedOrders = filteredOrders.filter(
    (order) => order.status === "shipped"
  ).length;

  return (
    <div>
      <Titleadmin text1={"ORDERS"} text2={"PAGE"} />

      {/* Order Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="bg-blue-100 p-4 text-center rounded shadow">
          <h3 className="text-xl font-bold">Total Orders</h3>
          <p className="text-2xl font-medium mt-2">{totalOrders}</p>
        </div>
        <div className="bg-red-100 p-4 text-center rounded shadow">
          <h3 className="text-xl font-bold">Orders Not Shipped</h3>
          <p className="text-2xl font-medium mt-2">{notShippedOrders}</p>
        </div>
        <div className="bg-green-100 p-4 text-center rounded shadow">
          <h3 className="text-xl font-bold">Orders Shipped</h3>
          <p className="text-2xl font-medium mt-2">{shippedOrders}</p>
        </div>
      </div>

      {/* Orders Listing */}
      <div>
        {filteredOrders.map((order, index) => (
          <div
            className="grid grid-cols-1 grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:py-4 text-xs sm:text-sm text-gray-700"
            key={index}
          >
            <img className="w-12" src={assets.parcel_icon} alt="" />
            <div>
              <div>
                {order.items.map((item, index) => (
                  <p className="py-0.5" key={index}>
                    {item.name} X {item.quantity} <span>{item.size}</span>
                    {index !== order.items.length - 1 && ", "}
                  </p>
                ))}
              </div>
              <p className="mt-3 mb-2 font-medium">
                {order.address.firstname + " " + order.address.lastname}
              </p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>

            <div>
              <p className="text-sm sm:text-[15px]">Items: {order.items.length}</p>
              <p className="mt-3">Method: {order.paymentmethod}</p>
              <p>Payment: {order.payment ? "Done" : "Pending"}</p>
              <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px]">
              {currency} {order.amount}
            </p>
            <select
              onChange={(event) => statushandler(event, order._id)}
              value={order.status}
              className="p-2 font-semibold"
            >
              <option value="orderplaced">orderplaced</option>
              <option value="packing">packing</option>
              <option value="shipped">shipped</option>
              <option value="out for delivery">out for delivery</option>
              <option value="delivered">delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
