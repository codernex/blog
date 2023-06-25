import React from "react";
import { Avatar } from "./Navbar";
import { useRouter } from "next/router";
import Image from "next/image";
import { User } from "@prisma/client";
import dayjs from "dayjs";
import { useSession } from "next-auth/react";

interface ReadingListProps {}

const ReadingList: React.FC<ReadingListProps> = ({}) => {
  const { data } = useSession();
  const blog: Blog[] = [
    {
      id: 1,
      title: "This Is The Title",
      featuredImage:
        "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?w=996&t=st=1687543556~exp=1687544156~hmac=3142b0a5d790222f2f2b6a689b03e7464534b81cac851b6efb4ea063899eac2c",
      author: data?.user,
      description: "Hello this is the new post",
      createdAt: new Date(Date.now()),
    },
  ];
  return (
    <div className="flex w-full flex-col space-y-6">
      <div className="font-bold">My reading list</div>
      <div className="flex flex-col space-y-4">
        {blog?.map((item, i) => (
          <CardPost key={i} blog={item} />
        ))}
      </div>
    </div>
  );
};
export default ReadingList;

interface Blog {
  id: number;
  featuredImage: string;
  title: string;
  description: string;
  author:
    | ({
        id: string;
      } & {
        name?: string | null | undefined;
        email?: string | null | undefined;
        image?: string | null | undefined;
      })
    | undefined;
  createdAt: Date;
}

export const CardPost = ({ blog }: { blog: Blog }) => {
  const router = useRouter();
  return (
    <div key={blog.id} className="group grid cursor-pointer grid-cols-10 gap-4">
      <div className="col-span-4 w-full max-w-xs">
        <div className="relative aspect-square rounded-xl bg-gray-400">
          {blog.featuredImage && (
            <Image
              src={blog.featuredImage}
              fill
              className="rounded-xl"
              alt={blog.title}
            />
          )}
        </div>
      </div>
      <div className="col-span-6 flex flex-col justify-around">
        <div className="text-base font-bold text-gray-900 decoration-indigo-600 group-hover:underline">
          {blog.title}
        </div>
        <div className="text-sm">{blog.description.slice(0, 90)}...</div>
        <div className="flex items-center space-x-2 text-xs">
          <div className="h-8 w-8 rounded-full bg-gray-400">
            <Avatar name={"Borhan"} imgUrl={blog?.author?.image} />
          </div>
          <div>{blog?.author?.name && blog.author.name}</div>
          <div>&#x2022;</div>
          <div>
            {blog.createdAt && dayjs(blog.createdAt).format("DD-MM-YYYY")}
          </div>
        </div>
      </div>
    </div>
  );
};
