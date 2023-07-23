import React from "react";

const TopCards = () => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-ful pb-4">
          <p className="text-2xl font-bold">$15698</p>
          <p className="text-gray-600">Daily Revenue</p>
        </div>
        <p className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
            <span className="text-gray-700 text-lg">18%</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">$856980</p>
          <p className="text-gray-600">YTD Revenue</p>
        </div>
        <p className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
            <span className="text-lg text-gray-600">11%</span>
        </p>
      </div>
      <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl font-bold">22023</p>
          <p className="text-gray-600">Customers</p>
        </div>
        <p className="bg-green-300 flex justify-center items-center p-2 rounded-lg">
            <span className="text-lg text-gray-600">17%</span>
        </p>
      </div>
    </div>
  );
};

export default TopCards;
