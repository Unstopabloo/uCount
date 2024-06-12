import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { MessagesSquare } from 'lucide-react';

export async function TopicCard({
  animated,
  disabled
}: {
  animated?: boolean,
  disabled?: boolean
}) {
  if (disabled) {
    return (
      <div
        className={`flex flex-1 items-start border border-card gap-4 w-full px-6 py-4 bg-card shadow-md rounded-lg`}>
        <Avatar
          className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
        >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className='flex items-center justify-between gap-1'>
          <div className="flex flex-col items-start justify-between gap-2 me-6">
            <strong className="text-xs text-text2 font-semibold">Viviana Uyarte</strong>
            <p className="flex-1 text-pretty text-text2/90 dark:text-text2/80">
              Esta información la saque de un sitio web muy interasante donde encuentro datos importantes como realizar...
            </p>
            <strong className="self-end text-primary font-semibold pe-6 text-sm">Arquitectuira de Información</strong>
          </div>
          <div className="relative flex items-center justify-center h-full">
            <MessagesSquare size={18} className="dark:text-slate-300" />
            <small className="absolute -top-3 -right-1 text-primary font-semibold">3</small>
          </div>
        </div>
      </div>
    )
  }


  return (
    <Link
      href="/dashboard/topicos/1"
      className={`${animated ? 'topic-card' : ''} flex flex-1 items-start border border-card gap-4 w-full px-6 py-4 bg-card shadow-md rounded-lg hover:shadow-lg hover:border-slate-200/80 dark:hover:border-gray-700/80`}>
      <Avatar
        className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
      >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='flex items-center justify-between gap-1'>
        <div className="flex flex-col items-start justify-between gap-2 me-6">
          <strong className="text-xs text-text2 font-semibold">Viviana Uyarte</strong>
          <p className="flex-1 text-pretty text-text2/90 dark:text-text2/80">
            Esta información la saque de un sitio web muy interasante donde encuentro datos importantes como realizar...
          </p>
          <strong className="self-end text-primary font-semibold pe-6 text-sm">Arquitectuira de Información</strong>
        </div>
        <div className="relative flex items-center justify-center h-full">
          <MessagesSquare size={18} className="dark:text-slate-300" />
          <small className="absolute -top-3 -right-1 text-primary font-semibold">3</small>
        </div>
      </div>
    </Link>
  )
}