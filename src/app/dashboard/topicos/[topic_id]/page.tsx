import { CommentCards } from "@/components/comentarios/CommentCards";
import { NewComment } from "@/components/comentarios/NewComment";
import { TopicCard } from "@/components/topicos/TopicCard";
import { ListCollapse } from "lucide-react";

export default async function TopicDetail() {
  return (
    <main className="py-16 px-28 relative grid grid-cols-3 h-screen overflow-hidden w-full">
      <section className="animate-fade-in-up col-span-1 h-full flex flex-col items-start gap-10 w-full">
        <header className="w-full flex flex-col items-start justify-between gap-4">
          <div className='flex items-center gap-4'>
            <h1 className='text-xl'>Tópicos</h1>
            <ListCollapse size={18} className="dark:text-slate-300" />
          </div>
          <small className='text-sm text-text2/70'>Rediseño Sitio Colegio DuocUC</small>
        </header>
        <div className="py-2 flex flex-col justify-between w-full gap-4">
          <TopicCard disabled />
          <NewComment />
        </div>
      </section>
      <section className="animate-fade-in-up col-span-2 w-full">
        <div className="flex flex-col items-center gap-10 ps-20">
          <header className="w-full">
            <h2 className='px-4'>4 Comentarios</h2>
          </header>
          <div className='flex flex-col gap-4 max-h-[50rem] overflow-y-auto overflow-x-hidden w-full px-4 pb-20'>
            <CommentCards />
            <CommentCards />
            <CommentCards />
            <CommentCards />
            <CommentCards />
            <CommentCards />
            <CommentCards />
            <CommentCards />
            <CommentCards />
          </div>
        </div>
      </section>
    </main>
  )
}