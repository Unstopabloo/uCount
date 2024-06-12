import { ClipboardList, ListCollapse } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { TaskCard } from '@/components/tareas/TaskCard';
import { TopicCard } from '@/components/topicos/TopicCard';

export default async function Home() {
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
        <div className='flex items-center justify-between gap-4 w-full'>
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
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