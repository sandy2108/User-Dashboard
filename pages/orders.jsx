import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Data } from "@/data/data";

const orders = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-between px-4 pt-4">
        <h2>Orders</h2>
        <h2>Welcome Back, Sanjay</h2>
      </div>
      <div className="p-4">
        <div className="w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto">
          <div className="my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between">
            <span className="font-semibold">Order</span>
            <span className="sm:text-left text-right font-semibold">
              Status
            </span>
            <span className="hidden md:grid font-semibold">Last Order</span>
            <span className="hidden sm:grid font-semibold">Method</span>
          </div>
          <ul>
            {Data.map((order, id) => (
              <li
                key={id}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2  grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between pointer-cursor"
              >
                {/* Order Col */}
                <div className="flex">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <FaShoppingBag className="text-purple-800" />
                  </div>
                  <div className="pl-4">
                    <p className="text-gray-800 font-bold">
                      ${order.total.toLocaleString()}
                    </p>
                    <p className="text-gray-800 font-am">{order.name.first}</p>
                  </div>
                </div>
                {/* Status Col */}
                <p className="text-gray-600 sm:text-left text-right">
                  <span
                    className={
                      order.status == "On Hold"
                        ? "bg-blue-200 p-2 rounded-lg"
                        : order.status == "Completed"
                        ? "bg-green-200 p-2 rounded-lg"
                        : order.status == "Shipped"
                        ? "bg-yellow-200 p-2 rounded-lg"
                        : "bg-gray-700 text-white p-2 rounded-lg"
                    }
                  >
                    {order.status}
                  </span>
                </p>

                {/* Date Col */}
                <p className="hidden md:flex ">{order.date}</p>
                {/* Method Col */}
                <div className="sm:flex hidden justify-between items-center">
                  <p>{order.method}</p>
                  <BsThreeDotsVertical />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
