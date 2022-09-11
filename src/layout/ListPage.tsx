import React, { Dispatch, SetStateAction, useState } from "react";
import { Listitems } from "../components/listComp/List.items";
import { AiOutlinePlus } from "react-icons/ai";
interface Props {
  Click: Dispatch<SetStateAction<number>>;
}
export const ListPage = (props: Props) => {
  const [addList, setAddList] = useState<boolean>(false);
  const list = [
    {
      name: "Lorem ipsum dolor sit amet.",
    },
    {
      name: "Lorem ipsum dolor sit amet.",
    },
    {
      name: "Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <>
      <div className="w-[20rem] h-[30rem] px-5">
        <h1 className="text-black text-3xl flex justify-center my-5">
          Vaultpass
        </h1>
        {addList ? (
          <>
            <div className="space-y-6">
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
                  type={"password"}
                  name="name"
                  id="name"
                  className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm focus-within:outline-none"
                  placeholder="password"
                />
              </div>
              <div className="w-full h-8 font-bold flex justify-center bg-indigo-600  text-white items-center ">
                <button>Add</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-black font-bold text-xl my-4">
              Connected List
            </h1>
            {list.map((item, index) => {
              return (
                <Listitems click={props.Click} name={item.name} key={index} />
              );
            })}
            <div className="flex justify-end">
              <div
                onClick={() => {
                  setAddList(true);
                }}
                className="flex justify-center items-center bg-indigo-400 w-10 h-10 rounded-full "
              >
                <AiOutlinePlus />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
