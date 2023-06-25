import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { IoCreateOutline, IoReorderThreeOutline } from "react-icons/io5";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { HiChevronDown, HiChevronUp, HiLogin, HiLogout } from "react-icons/hi";
import { useGlobalContext } from "~/context/global.context";

interface NavbarProps {}

export const Avatar = ({ imgUrl }: { imgUrl: string | undefined | null }) => {
  return (
    <div className="flex items-center">
      <Image
        width={100}
        height={10}
        src={imgUrl}
        alt={imgUrl ?? ""}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-xl font-semibold text-white duration-300"
      />
    </div>
  );
};

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const { data, status } = useSession();
  const { setWriteModalOpen } = useGlobalContext();

  if (status === "loading") {
    return <h2>...Loading</h2>;
  }
  return (
    <nav className="flex h-20 items-center justify-between border-b px-8">
      <div>
        <IoReorderThreeOutline fontSize={28} />
      </div>
      <div>
        <h2 className="text-2xl font-thin">Blog</h2>
      </div>
      {status === "authenticated" ? (
        <div className="flex items-center gap-x-4">
          <AiOutlineBell fontSize={24} />
          <Avatar name={data.user.name} imgUrl={data.user.image} />
          <button
            className="flex h-10 items-center rounded-md border border-slate-400 px-4 text-sm"
            style={{
              fontWeight: 400,
            }}
            onClick={() => setWriteModalOpen(true)}
          >
            <IoCreateOutline fontSize={24} />
            <span>Write</span>
          </button>
          <button
            onClick={() => void signOut()}
            className="flex h-10 items-center rounded-md border border-slate-400 px-4 text-sm"
          >
            <HiLogout />
            Logout
          </button>
        </div>
      ) : (
        <button
          className="flex items-center rounded-md border border-slate-400 px-4 py-2 text-sm"
          onClick={() => void signIn()}
          type="button"
        >
          <HiLogin /> Login
        </button>
      )}
    </nav>
  );
};
export default Navbar;
