"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Calendar } from "@/components/ui/calendar"
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { addMonth, format } from "@formkit/tempo"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"

const formSchema = z.object({
  description: z.string({
    message: "El comentario debe ser un texto",
  }).min(6, {
    message: "El comentario debe tener al menos 6 caracteres",
  }).max(255, {
    message: "El comentario no puede tener más de 255 caracteres",
  }),
  title: z.string({
    message: "El título debe ser un texto",
  }).min(10, {
    message: "El título debe tener al menos 10 caracteres",
  }),
  comienzo: z.date({
    required_error: "La fecha de inicio es obligatoria",
  }),
  fin: z.date({
    required_error: "La fecha de fin es obligatoria",
  })
})

export function NewTask() {
  const [beginDate, setBeginDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      title: "",
      comienzo: new Date(),
      fin: new Date(),
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
        <div className="pb-3">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="py-5">Nombre de la tarea</FormLabel>
                <FormControl>
                  <Input placeholder="Escribe aquí el nombre de la tarea" className="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>



        <div className="flex items-center justify-start gap-4 py-3">


          <FormField
            control={form.control}
            name="comienzo"
            render={({ field }) => {
              field.value ? setBeginDate(field.value) : setBeginDate(new Date())

              return (
                <FormItem className="flex flex-col">
                  <FormLabel>Fecha de comienzo</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "border-gray-400 dark:border-gray-600 hover:bg-transparent w-[240px] pl-3 text-left flex items-center gap-3 font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon size={16} />
                          {field.value ? (
                            format({
                              date: field.value,
                              format: "DD MMMM YYYY",
                              locale: "es"
                            })
                          ) : (
                            <span>Selecciona una fecha de comienzo</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date > addMonth(new Date(), 1)
                        }
                        initialFocus

                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )
            }}
          />



          <FormField
            control={form.control}
            name="fin"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Fecha de fin</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "border-gray-400 dark:border-gray-600 hover:bg-transparent w-[240px] pl-3 text-left flex items-center gap-3 font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon size={16} />
                        {field.value ? (
                          format({
                            date: field.value,
                            format: "DD MMMM YYYY",
                            locale: "es"
                          })
                        ) : (
                          <span>Selecciona una fecha de fin</span>
                        )}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < beginDate || date > addMonth(new Date(), 2)
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>



        <div className="my-3 p-4 border border-primary/40 rounded-xl">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="py-5">Detalle de la tarea</FormLabel>
                <FormControl>
                  <Textarea placeholder="Escribe aquí el detalle de la tarea" className="h-36 resize-none" {...field} />
                </FormControl>
                <FormDescription className="self-end">
                  Maxímo 255 caracteres.
                </FormDescription>
                <FormMessage className="self-end" />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-end pe-10 w-full mt-6">
          <Button className="self-end text-text1 dark:text-slate-100 px-10" type="submit">Añadir</Button>
        </div>
      </form>
    </Form>
  )
}