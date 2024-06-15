import { TopicCard } from "@/components/topicos/TopicCard";
import { ListCollapse } from "lucide-react";
import { NewTopic as NewTopicForm } from "@/components/topicos/newTopic";

export default async function NewTopic() {
  return (
    <main className="py-16 px-28 relative grid grid-cols-5 h-screen overflow-hidden w-full">
      <section className="animate-fade-in-up col-span-2 h-full flex flex-col items-center gap-10 w-full">
        <header className="w-full flex flex-col items-start justify-between gap-4">
          <div className='flex items-center gap-4'>
            <h1 className='text-xl'>Crear Tópicos</h1>
            <ListCollapse size={18} className="dark:text-slate-300" />
          </div>
          <small className='text-sm text-text2/70'>Rediseño Sitio Colegio DuocUC</small>
        </header>
        <NewTopicForm />

      </section>

      <section className="animate-fade-in-up col-span-3 w-full">
        <div className="flex flex-col items-center gap-10 ps-20">
          <header className="w-full flex items-center justify-between">
            <h2 className='px-4'>Tópicos subidos: </h2>
          </header>
          <div className='flex flex-col gap-4 max-h-[50rem] overflow-y-auto overflow-x-hidden w-full px-4 pb-20'>
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
            <TopicCard animated />
          </div>
        </div>
      </section>
    </main>
  )
}