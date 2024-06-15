import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export async function CommentCards() {
  return (
    <div
      className={`comment-card flex flex-1 items-start border border-card gap-4 w-full px-6 py-4 bg-card shadow-md rounded-lg`}>
      <Avatar
        className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
      >
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='flex items-center justify-between gap-1'>
        <div className="flex flex-col items-start justify-between gap-2 me-6">
          <strong className="text-xs text-text2 font-semibold">Viviana Uyarte</strong>
          <p className="max-w-[550px] text-pretty text-text2/90 dark:text-text2/80">
            Esta información la saque de un sitio web muy interasante donde encuentro datos importantes como realizar...
          </p>
        </div>
        <div className="flex items-center justify-center h-full">
          <small className="text-primary font-semibold">3 puntos</small>
        </div>
      </div>
    </div>
  )
}