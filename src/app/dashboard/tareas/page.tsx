import { NewTask } from "@/components/tareas/newTask"
import { Button } from "@/components/ui/button"
import { ListCollapse } from "lucide-react"

export default async function Tareas() {

  return (
    <main className="py-16 px-28 min-h-screen overflow-hidden w-full">
      <header className="w-full flex flex-col gap-5 items-start">
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
    </main>
  )
} 