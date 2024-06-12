import { NewComment } from "@/components/topicos/NewComment";
import { TopicCard } from "@/components/topicos/TopicCard";
import { ListCollapse } from "lucide-react";

export default async function TopicDetail() {
  return (
    <main className="container py-16 px-28 w-full">
      <header className="w-full flex flex-col items-start justify-between gap-4">
        <div className='flex items-center gap-4'>
          <h1 className='text-xl'>Tópicos</h1>
          <ListCollapse size={18} className="dark:text-slate-300" />
        </div>
        <small className='text-sm text-text2/70'>Rediseño Sitio Colegio DuocUC</small>
      </header>
      <div className="py-10 flex flex-col w-full gap-4">
        <TopicCard disabled />
        <NewComment />
      </div>
    </main>
  )
}