"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Input } from "@/components/ui/input"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  description: z.string({
    message: "El comentario debe ser un texto",
  }).min(6, {
    message: "El comentario debe tener al menos 6 caracteres",
  }).max(255, {
    message: "El comentario no puede tener más de 255 caracteres",
  }),
  func: z.enum(["Actualizar", "Reparar", "Modificar", "Refinar", "Transformar", "Ajustar", "Renovar", "Corregir", "Reestructurar", "Revisar"]),
  tarea: z.string(),
  image: z.string()
})

export function NewTopic() {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative bg-card mt-20 shadow-md rounded-lg p-4 w-full">
        <div className="flex items-center justify-end w-full">
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input id="picture" className="absolute top-2 right-2 max-w-[45%]" type="file" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="py-5">Añade un tópico aquí</FormLabel>
              <FormControl>
                <Textarea placeholder="Escribe aquí" className="h-36 resize-none" {...field} />
              </FormControl>
              <FormDescription>
                Maxímo 255 caracteres.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between w-full mt-6">
          <div className="flex items-center justify-start gap-4">
            <FormField
              control={form.control}
              name="func"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Funcionamiento</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Funcionamiento" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Actualizar">Actualizar</SelectItem>
                      <SelectItem value="Reparar">Reparar</SelectItem>
                      <SelectItem value="Modificar">Modificar</SelectItem>
                      <SelectItem value="Refinar">Refinar</SelectItem>
                      <SelectItem value="Transformar">Transformar</SelectItem>
                      <SelectItem value="Ajustar">Ajustar</SelectItem>
                      <SelectItem value="Renovar">Renovar</SelectItem>
                      <SelectItem value="Corregir">Corregir</SelectItem>
                      <SelectItem value="Reestructurar">Reestructurar</SelectItem>
                      <SelectItem value="Revisar">Revisar</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tarea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tarea</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Tarea" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Actualizar">Actualizar</SelectItem>
                      <SelectItem value="Reparar">Reparar</SelectItem>
                      <SelectItem value="Modificar">Modificar</SelectItem>
                      <SelectItem value="Refinar">Refinar</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <Button className="self-end text-text1 dark:text-slate-100" type="submit">Añadir</Button>

        </div>
      </form>
    </Form>
  )
}