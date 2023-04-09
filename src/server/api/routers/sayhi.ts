import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const sayHiRouter = createTRPCRouter({
  //   sayHi: publicProcedure.input(z.object({ message: z.string() })).query(()),
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.sayHi.findMany();
    } catch (error) {
      console.log(error);
    }
  }),
});
