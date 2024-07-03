import { NewTask } from "@/components/tareas/newTask"
import { Button } from "@/components/ui/button"
import { ListCollapse } from "lucide-react"
import { FullTaskCards } from "@/components/tareas/FullTaskCards"

export default async function Tareas() {

  return (
    <main className="pt-16 px-28 h-screen overflow-auto w-full">
      <header className="w-full flex flex-col gap-4 items-start">
        <div className='flex items-center gap-4'>
          <h2 className="text-text1 dark:text-white">Tareas</h2>
          <ListCollapse size={18} className="dark:text-slate-300" />
        </div>
        <div className="flex flex-col gap-2">
          <strong className="text-base font-medium text-text2">Nombre de proyecto actual</strong>
          <p className="text-text2/90">Descripcion de proyecto actual</p>
        </div>
      </header>
      <NewTask />
      <div className="py-10 flex flex-col gap-6">
        <FullTaskCards />
        <FullTaskCards />
      </div>
    </main>
  )
} 