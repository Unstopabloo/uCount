'use client'

import { BookOpenText, ClipboardList, ListCollapse, SquareGanttChart } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  {
    id: 1,
    href: '/dashboard',
    name: 'Inicio',
    icon: 'BookOpenText',
    delay: '0'
  },
  {
    id: 2,
    href: '/dashboard/proyectos',
    name: 'Proyectos',
    icon: 'ClipboardList',
    delay: '75'
  },
  {
    id: 3,
    href: '/dashboard/tareas',
    name: 'Tareas',
    icon: 'ListCollapse',
    delay: '150'
  },
  {
    id: 4,
    href: '/dashboard/topicos',
    name: 'Topicos',
    icon: 'ListCollapse',
    delay: '300'
  },
]

export function NavLinks() {
  const pathname = usePathname()
  console.log(pathname)

  return (
    <ul className="flex flex-col gap-5 [&>li]:flex [&>li]:items-center [&>li]:gap-4 [&>li]:p-2">
      {LINKS.map((link) => (
        <li
          key={link.id}
          className={`animate-fade-in-right delay-${link.delay} hover:bg-stone-100 dark:hover:bg-stone-800 duration-600 rounded-xl ${pathname === link.href ? 'bg-stone-100 dark:bg-stone-800' : 'bg-transparent'}`}>
          {link.icon === 'BookOpenText' && <BookOpenText size={18} className="dark:text-slate-300" />}
          {link.icon === 'ClipboardList' && <ClipboardList size={18} className="dark:text-slate-300" />}
          {link.icon === 'ListCollapse' && <ListCollapse size={18} className="dark:text-slate-300" />}
          {link.icon === 'SquareGanttChart' && <SquareGanttChart size={18} className="dark:text-slate-300" />}
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  )
}