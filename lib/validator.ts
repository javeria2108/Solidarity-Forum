import { z } from "zod"
export const eventFormSchema = z.object({
    title: z.string().min(3, {
      message: "Title must be atleast 3 characters",
    }),
    description: z.string().min(3, {
        message: "description must be atleast 3 characters",
      }).max(400, 'description must be less than 400 characters'),
      location: z.string().min(3, {
        message: "location must be atleast 3 characters",
      }).max(400, 'location must be less than 400 characters'),
      imageUrl: z.string(),
      startDateTime: z.date(),
      endDateTime: z.date(),
      categoryId: z.string(),
    //   price: z.string(),
    //   isFree: z.boolean(),
      url: z.string().url()    })