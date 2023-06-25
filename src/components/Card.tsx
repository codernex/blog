import React from "react";
import { IoReader } from "react-icons/io5";

interface CardProps {}

export const Card: React.FC<CardProps> = ({}) => {
  return (
    <div className="">
      <div className="grid grid-cols-12 rounded-xl bg-gradient-to-br from-gray-200 via-gray-200/50 to-gray-300 p-8">
        <div className="col-span-9 grid grid-cols-1 gap-y-4">
          <div>
            <div className="font-lg font-bold text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur.
            </div>
            <div className="text-sm font-medium text-gray-600">
              Lorem ipsum dolor sit Lorem, ipsum.
            </div>
          </div>
          <div>
            <div className="w-fit rounded-3xl bg-gray-300 px-4 py-2 text-sm text-gray-700">
              Get unlimited access
            </div>
          </div>
        </div>
        <div className="col-span-3 grid w-full place-items-center">
          <IoReader size={115} className="text-white" />
        </div>
      </div>
    </div>
  );
};
export default Card;
