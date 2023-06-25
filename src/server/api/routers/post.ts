import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { createBlogSchema } from "~/components";
import slugify from "slugify";
export const postRouter = createTRPCRouter({
  getPost: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });

    return posts;
  }),
  createPost: protectedProcedure
    .input(createBlogSchema)
    .mutation(
      async ({
        ctx: { prisma, session },
        input: { description, text, title },
      }) => {
        await prisma.post.create({
          data: {
            title,
            description,
            text,
            slug: slugify(title),
            author: {
              connect: {
                id: session.user.id,
              },
            },
          },
        });
      }
    ),
});
