import React from "react";
import Card from "./Card";
import FollowSuggestion from "./FollowSuggestion";
import ReadingList from "./ReadingList";

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <aside className="relative col-span-4 flex h-[90vh] w-full flex-col gap-y-8 px-8 py-8">
      <Card />
      <FollowSuggestion />
      <ReadingList />
    </aside>
  );
};
export default Sidebar;
