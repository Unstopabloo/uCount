import { Raleway } from "@/lib/fonts";
import { UserButton, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import ToggleTheme from "@/components/toggle-theme"
import { SquareGanttChart, User2Icon, ClipboardList, ListCollapse, BookOpenText } from 'lucide-react';

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden w-full flex ">
      <aside className="bg-[#00C2E080]/10 dark:bg-slate-900 p-14 max-w-[200px] bg-white border-r border-primary/40 min-h-screen h-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-20">
          <header className="flex flex-col items-center justify-center gap-4">
            <strong className={`text-3xl text-primary font-bold ${Raleway.className}`}>uCount</strong>
          </header>
          <nav>
            <ul className="flex flex-col gap-5 [&>li]:flex [&>li]:items-center [&>li]:gap-4 [&>li]:p-4">
              <li>
                <SquareGanttChart size={18} className="dark:text-slate-300" />
                <Link className="dark:text-slate-300" href="/dashboard/">Inicio</Link>
              </li>
              <li>
                <BookOpenText size={18} className="dark:text-slate-300" />
                <Link className="dark:text-slate-300" href="/dashboard/proyectos/">Proyectos</Link>
              </li>
              <li>
                <ClipboardList size={18} className="dark:text-slate-300" />
                <Link className="dark:text-slate-300" href="/dashboard/tareas/">Tareas</Link>
              </li>
              <li>
                <ListCollapse size={18} className="dark:text-slate-300" />
                <Link className="dark:text-slate-300" href="/dashboard/topicos/">Topicos</Link>
              </li>
            </ul>
          </nav>
        </div>
        <footer className="flex items-center justify-between gap-5">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ToggleTheme />
        </footer>
      </aside>
      {children}
    </div>
  )
}