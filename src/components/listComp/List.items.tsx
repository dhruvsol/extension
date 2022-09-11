import Avatar from "boring-avatars";
import React, { Dispatch, SetStateAction } from "react";
interface Props {
  name: string;
  click: Dispatch<SetStateAction<number>>;
}
export const Listitems = (props: Props) => {
  return (
    <>
      <div
        onClick={() => {
          props.click(2);
        }}
        className="border rounded-lg h-10 w-full my-5 flex justify-start px-2 items-center gap-x-3"
      >
        <Avatar size={"1.3rem"} />
        <h1 className="text-black">{props.name}</h1>
      </div>
    </>
  );
};
