import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MessagesSquare } from 'lucide-react';

export async function TopicCard() {
  return (
    <article className='topic-card flex items-start gap-4 w-full px-6 py-4 bg-card shadow-md rounded-lg'>
      <Avatar
        className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
      >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='flex flex-col items-start gap-2'>
        <strong className="text-xs text-text2 font-semibold">Viviana Uyarte</strong>
        <div className="flex items-center justify-between gap-4">
          <p className="flex-1 max-w-[450px] text-balance text-text2/90">Esta información la saque de un sitio web muy interasante donde encuentro datos importantes como realizar...</p>
          <div className="relative">
            <MessagesSquare size={18} className="dark:text-slate-300" />
            <small className="absolute -top-3 -right-1 text-primary font-semibold">3</small>
          </div>
        </div>
        <strong className="self-end text-primary font-semibold pe-6 text-sm">Arquitectuira de Información</strong>
      </div>
    </article>
  )
}