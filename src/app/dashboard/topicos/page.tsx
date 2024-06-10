import { Chip } from '@/components/tareas/Chip'
import { ListCollapse } from 'lucide-react'
import { TopicCard } from '@/components/topicos/TopicCard'

export default async function Topicos() {
  return (
    <div className="py-16 px-28 relative grid grid-cols-3 h-screen overflow-hidden w-full">
      <section className="animate-fade-in-up col-span-1 flex flex-col items-start gap-10 w-full">
        <header className="relative flex items-end justify-center w-full rounded-2xl pb-3 pt-20 px-4 bg-gradient-to-t via-50% from-primary/50 via-primary/20 to-secondary/10">
          <h1 className="font-semibold">Rediseño Sitio Colegio DuocUC</h1>
        </header>

        <article className="flex flex-col items-start gap-3 w-full">
          <h2>Funcionamientos</h2>
          <div className="flex items-center justify-center flex-wrap gap-4 w-full bg-card border border-primary/20 rounded-2xl px-4 py-4">
            <Chip text="Actualizar" />
            <Chip text="Reparar" />
            <Chip text="Modificar" />
            <Chip text="Refinar" />
            <Chip text="Transformar" />
            <Chip text="Ajustar" />
            <Chip text="Renovar" />
            <Chip text="Corregir" />
            <Chip text="Reestructurar" />
            <Chip text="Revisar" />
          </div>
        </article>

        <article className="flex flex-col items-start gap-3 w-full">
          <h2>Tareas</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 w-full bg-card border border-primary/20 rounded-2xl px-4 py-4">
            <Chip isTask text="Diseño" />
            <Chip isTask text="Reunión" />
            <Chip isTask text="Arquitectura de Información" />
          </div>
        </article>
      </section>

      <section className="animate-fade-in-up col-span-2 w-full">
        <div className="flex flex-col items-center gap-10 ps-20">
          <header className="w-full flex items-center justify-between">
            <div className='flex items-center gap-4'>
              <h2>Tópicos</h2>
              <ListCollapse size={18} className="dark:text-slate-300" />
            </div>
          </header>
          <div className='flex flex-col gap-4 max-h-[50rem] overflow-y-auto overflow-x-hidden w-full pe-4'>
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
          </div>
        </div>
      </section>
    </div>
  )
}