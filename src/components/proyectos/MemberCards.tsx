import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export async function MemberCards(members: Member[]) {
  return (
    <article className="flex flex-col items-start gap-3 bg-card shadow-md p-4 rounded-lg">
      <header className="flex items-center justify-between gap-4 border-b w-full border-slate-100 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className="text-text2 font-semibold">Viviana Uyarte</h3>
        </div>
      </header>
      <div className="flex items-end justify-between gap-4 w-full">
        <div className="flex flex-col items-start justify-between">
          <h4 aria-label="Nombre de usuario" className="text-text2/80">Pivi</h4>
          <small aria-label="Correo de usuario" className="text-text2/70">pivi@gmail.com</small>
        </div>
        <div className="size-6 p-2 rounded-full bg-primary/70 text-white text-xs flex items-center justify-center">R</div>
      </div>
    </article>
  )
}