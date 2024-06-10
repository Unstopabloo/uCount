import { ClipboardList, Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export async function TaskCard() {
  return (
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
  )
}