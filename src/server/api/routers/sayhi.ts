import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const sayHiRouter = createTRPCRouter({
  //   sayHi: publicProcedure.input(z.object({ message: z.string() })).query(()),
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.sayHi.findMany({
        select: {
          username: true,
          message: true,
          createdAt: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }),

  addHi: publicProcedure
    .input(
      z.object({
        username: z
          .string()
          .min(2, "Username should contain at least 2 characters")
          .trim(),
        message: z.string().max(60).trim(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.sayHi.create({
          data: {
            username: input.username,
            message: input.message,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
