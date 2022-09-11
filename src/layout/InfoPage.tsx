import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
export const InfoPage = () => {
  const [disable, setDisable] = useState<boolean>(true);
  return (
    <>
      <div className=" w-[20rem] h-[30rem] px-5 flex justify-center  flex-col gap-7">
        <h1 className="text-black text-3xl flex justify-center my-4">
          Vaultpass
        </h1>
        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            htmlFor="website"
            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            Website
          </label>
          <input
            type="text"
            name="name"
            id="name"
            disabled={disable}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm focus-within:outline-none"
            placeholder="https://www.abcd.co"
          />
        </div>
        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            htmlFor="email"
            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            Email
          </label>
          <input
            type="text"
            name="name"
            id="name"
            disabled={disable}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm focus-within:outline-none"
            placeholder="abcd@gmail.com"
          />
        </div>
        <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600">
          <label
            htmlFor="password"
            className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type={disable ? "password" : "text"}
            name="name"
            id="name"
            disabled={disable}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm focus-within:outline-none"
            placeholder="password"
          />
        </div>
        <div
          onClick={() => {
            setDisable(!disable);
          }}
          className=" flex justify-end items-end"
        >
          {disable ? (
            <div>
              <FaRegEdit size={"1.4rem"} />
            </div>
          ) : (
            <>
              <button className="w-16 h-6 rounded-md bg-green-600">Save</button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
