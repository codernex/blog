import React from "react";
import { Avatar } from "./Navbar";

interface FollowSuggestionProps {}

const FollowSuggestion: React.FC<FollowSuggestionProps> = ({}) => {
  return (
    <div className="flex flex-col gap-y-6">
      <h2 className="font-semibold">People You Might Like</h2>
      <div className="flex flex-col justify-center gap-y-4">
        {[1, 2, 3, 4].map((item, i) => {
          return (
            <div className="grid w-full grid-cols-12 gap-2" key={i}>
              <div className="col-span-2">
                <Avatar name={"Borhan"} />
              </div>
              <div className="col-span-7 flex flex-col">
                <div className="text-sm font-bold">{"Borhan Uddin"}</div>
                <div className="text-xs font-normal">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illo, ut.
                </div>
              </div>
              <div className="col-span-3">
                <button className="flex items-center space-x-2 rounded-lg px-4 py-2 ring-1 ring-gray-400">
                  Follow
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FollowSuggestion;
