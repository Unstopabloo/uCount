import { ClipboardList, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getLastTasks } from "@/server/actions/get"
import Link from "next/link";

export async function TaskCards({ project_id, is_leader }: { project_id: number, is_leader: boolean }) {
  const tasks = await getLastTasks({ project_id })

  if (tasks.length === 0 && !is_leader) {
    return (
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <strong className="text-text1 font-semibold text-base">Aun no hay tareas que mostrar</strong>
        <small className="text-text2/80 text-sm font-normal">Habla con el lider para comenzar</small>
      </div>
    )
  }

  if (is_leader && tasks.length === 0) {
    return (
      <div className="flex items-center justify-center w-full">
        <Button asChild variant="outline" className="flex flex-col items-center justify-center gap-4 min-h-28 min-w-36 text-primary">
          <Link href="/dashboard/tareas/">
            <Plus size={45} className="dark:text-white" />
            <span>
              Agregar tarea
            </span>
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className='flex items-center justify-between gap-4 w-full'>
      {
        tasks.map(tarea => (
          <article key={tarea.task_id} className='flex flex-col items-start gap-3 bg-card shadow-md rounded-2xl py-4 px-6 flex-1'>
            <h3 className='text-sm'>{tarea.title}</h3>
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
      {
        !is_leader && (
          <div className="flex items-center justify-center w-full">
            <Button asChild variant="outline" className="flex flex-col items-center justify-center gap-4 min-h-28 min-w-36 text-primary">
              <Link href="/dashboard/tareas/">
                <Plus size={45} className="dark:text-white" />
                <span>
                  Agregar tarea
                </span>
              </Link>
            </Button>
          </div>
        )
      }
    </div>
  )
}