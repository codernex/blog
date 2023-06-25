import React from "react";
import { Modal } from "./Modal";
import { useGlobalContext } from "~/context/global.context";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "~/utils/api";
import { toast } from "react-hot-toast";
import Trpc from "~/pages/api/trpc/[trpc]";

interface CreateBlog {
  title: string;
  text: string;
  description: string;
}

export const createBlogSchema = z.object({
  title: z.string(),
  description: z.string(),
  text: z.string(),
});

export const WriteFormModal: React.FC = ({}) => {
  const { isWriteModalOpen, setWriteModalOpen } = useGlobalContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBlog>({
    resolver: zodResolver(createBlogSchema),
  });

  const postRoute = api.useContext().post;

  const post = api.post.createPost.useMutation({
    onSuccess: async () => {
      toast.success("Post Created Successfully");
      await postRoute.getPost.invalidate();
    },
    onError: ({ message }) => {
      alert(message);
    },
  });
  const onSubmit: SubmitHandler<CreateBlog> = (data: CreateBlog) => {
    post.mutate(data);
    setWriteModalOpen(false);
  };
  return (
    <Modal isOpen={isWriteModalOpen} onClose={() => setWriteModalOpen(false)}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-6">
        {errors.title ? (
          <p className="text-red-500">{errors.title.message}</p>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Title Of The Blog"
          id="title"
          {...register("title")}
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
        />
        {errors.description ? (
          <p className="text-red-500">{errors.description.message}</p>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Describe your blog a bit"
          id="shortDesc"
          {...register("description")}
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
        />
        {errors.text ? (
          <p className="text-red-500">{errors.text.message}</p>
        ) : (
          ""
        )}
        <textarea
          id="description"
          cols={10}
          rows={10}
          {...register("text")}
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Wite a brief description about your blog"
        />

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-md border border-gray-300 p-2 duration-300 hover:border-gray-600"
          >
            Publish
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default WriteFormModal;
