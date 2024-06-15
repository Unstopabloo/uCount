"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  comment: z.string({
    message: "El comentario debe ser un texto",
  }).min(6, {
    message: "El comentario debe tener al menos 6 caracteres",
  }).max(255, {
    message: "El comentario no puede tener más de 255 caracteres",
  }),
})

export function NewComment() {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="bg-card mt-20 shadow-md rounded-lg p-4">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Añade un comentario a este tópico</FormLabel>
              <FormControl>
                <Textarea placeholder="Escribe aquí tu comentario" className="h-36 resize-none" {...field} />
              </FormControl>
              <FormDescription>
                Maxímo 255 caracteres.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end w-full">
          <Button className="self-end text-text1 dark:text-slate-100" type="submit">Añadir</Button>
        </div>
      </form>
    </Form>
  )
}