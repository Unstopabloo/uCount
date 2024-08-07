import { ClipboardList, ListCollapse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TaskCards } from '@/components/tareas/TaskCard';
import { TopicCard } from '@/components/topicos/TopicCard';
import { Metadata } from 'next'
import { getActualGroup, getLeaderGroup } from '@/server/actions/get';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Hive5 - Dashboard',
  description: "Toda la informacion que necesitas para trabajar en Hive5 y ponerte al día con tus actividades.",
}

export default async function Home() {
  const leader = await getLeaderGroup()
  const { project_id } = await getActualGroup()

  return (
    <main className="py-16 px-28 relative h-screen overflow-y-auto w-full">
      <section className="animate-fade-in-up flex flex-col items-start gap-10 pb-12 w-full border-b border-border">
        <header className='flex items-end justify-between gap-4 w-full'>
          <div className="flex flex-col items-start gap-4">
            <h2 className="flex items-center gap-2 font-semibold text-lg">Tareas <ClipboardList size={18} className="dark:text-slate-300" /></h2>
            <small className='text-sm text-text2/70'>Rediseño Sitio Colegio DuocUC</small>
          </div>
          <Button asChild variant="link" className="min-w-28 rounded-lg opacity-80">
            <Link href="/dashboard/tareas">Todas las Tareas</Link>
          </Button>
        </header>
        <Suspense fallback={<span>cargando...</span>}>
          <TaskCards project_id={project_id} is_leader={leader} />
        </Suspense>
      </section>
      <section className="animate-fade-in-up flex flex-col items-start gap-10 py-12 w-full">
        <header className='flex items-end justify-between gap-4 w-full'>
          <div className="flex flex-col items-start gap-4">
            <h2 className="flex items-center gap-2 font-semibold text-lg">Tópicos <ListCollapse size={18} className="dark:text-slate-300" /></h2>
            <small className='text-sm text-text2/70'>Rediseño Sitio Colegio DuocUC</small>
          </div>
          <Button asChild variant="link" className="min-w-28 rounded-lg opacity-80">
            <Link href="/dashboard/topicos">Todos los Tópicos</Link>
          </Button>
        </header>
        <div className='grid grid-cols-2 grid-rows-3 gap-x-16 gap-y-10 w-full'>
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
          <TopicCard />
        </div>
      </section>
    </main>
  )
}