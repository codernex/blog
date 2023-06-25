import React from "react";
import { Avatar } from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Tag from "./Tag";
import { Post } from "@prisma/client";
import dayjs from "dayjs";

interface ArticleProps {
  post: Post;
}

export const Article: React.FC<ArticleProps> = ({ post }) => {
  const tags = [
    {
      name: "design",
    },
    {
      name: "development",
    },
    {
      name: "database",
    },
  ];

  return (
    <div className="flex h-max w-full flex-col border-b border-gray-300 py-6 last:border-none">
      <Link href={`/u/`} className="group flex w-full items-center space-x-4">
        <div>
          <div className="relative h-10 w-10 rounded-full bg-gray-400">
            <Avatar name={"B"} imgUrl={post?.author?.image} />
          </div>
        </div>
        <div>
          <div>
            <span className="group-hover:underline">{post?.author.name}</span>{" "}
            &#x2022; {dayjs(post.createdAt).format("DD/MMM/YYYY")}
          </div>
          {/* Todo: */}
          <div>The founder & teacher @ clubofcoders.com</div>
        </div>
      </Link>
      <Link href={`/`}>
        <div className="group grid grid-cols-12">
          <div className="col-span-8 flex flex-col justify-center space-y-4">
            <div className="text-xl font-extrabold decoration-indigo-600 group-hover:underline">
              {post.title}
            </div>
            <div className="text-sm text-gray-600">{post.description}</div>
          </div>
          <div className="col-span-4 w-full max-w-sm">
            <div className="relative aspect-video transform rounded-xl bg-gray-400 shadow-xl transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-2xl">
              {post.featuredImage && (
                <Image
                  src={post.featuredImage}
                  fill
                  alt="Hello"
                  className="rounded-xl"
                />
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className="flex w-full items-center justify-between space-x-4">
        <div className="flex flex-row flex-wrap space-x-2">
          {tags.map((tag, i) => (
            <Tag key={i} name={tag.name} />
          ))}
        </div>
        {/* <div>
          {(bookmarkPost.isLoading || removeBookmark.isLoading) && (
            <BsThreeDots className="animate-pulse text-2xl text-indigo-600" />
          )}
          {!bookmarkPost.isLoading &&
            !removeBookmark.isLoading &&
            (isBookmarked ? (
              <BsBookmarkCheck
                className="cursor-pointer text-2xl text-indigo-700 hover:text-gray-700"
                onClick={() => removeBookmark.mutate({ postId: id })}
              />
            ) : (
              <BsBookmarkPlus
                onClick={() => bookmarkPost.mutate({ postId: id })}
                className="cursor-pointer text-2xl text-gray-900 hover:text-gray-700"
              />
            ))}
        </div> */}
      </div>
    </div>
  );
};
export default Article;
