import { ClipboardList, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getLastTasks } from "@/server/actions/get"

export async function TaskCards({ project_id }: { project_id: number }) {
  const tasks = await getLastTasks({ project_id })

  if (tasks.length === 0) {
    return (
      <strong>Aun no hay tareas que mostrar</strong>
    )
  }

  return (
    <div className='flex items-center justify-between gap-4 w-full'>
      {
        tasks.map(tarea => (
          <article className='flex flex-col items-start gap-3 bg-card shadow-md rounded-2xl py-4 px-6 flex-1'>
            <h3 className='text-sm'>Arquitectura de Información</h3>
            <Button className='min-w-[220px] text-sm w-full flex items-center justify-between rounded-2xl text-text1 dark:text-white'>
              Agregar Topico <Plus size={18} className="dark:text-white" />
            </Button>
            <div className='flex items-center justify-between w-full'>
              <div className='flex -space-x-2'>
                <Avatar
                  className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                >
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar
                  className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                >
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar
                  className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                >
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <ClipboardList size={18} className="dark:text-slate-300" />
            </div>
          </article>
        ))
      }

    </div>
  )
}