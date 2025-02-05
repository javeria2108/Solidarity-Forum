'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"
import { eventFormSchema } from "@/lib/validator"
import { eventDefaultValues } from "@/constants"

 

type EventFormProps = {
    userId: String
    type: "Create" | "Update"
}
//user id and type inputs
const EventForm = ({type} : EventFormProps) => {

  const initialValues= eventDefaultValues

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex
      flex-col gap-5">

        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input placeholder="Event title" {...field}
                className="input-field" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl className="h-72">
                <Textarea placeholder="Description" {...field}
                className="textarea rounded-2xl" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        </div>

        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default EventForm