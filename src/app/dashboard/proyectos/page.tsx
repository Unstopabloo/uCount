import { ActualDataSkeleton, DataActualProject } from "@/components/proyectos/DataActualProject";
import { MemberCardSkeleton, MemberCards } from "@/components/proyectos/MemberCards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getActualGroup } from "@/server/actions/get";
import Link from "next/link";
import { Suspense } from "react";

export default async function Proyectos() {
  const group_project = await getActualGroup()

  return (
    <main className="py-16 px-28 relative flex flex-col h-screen overflow-y-auto overflow-x-hidden w-full">
      <Suspense fallback={<ActualDataSkeleton />}>
        <DataActualProject group_id={group_project.group_id} />
      </Suspense>
      <Suspense fallback={<MemberCardSkeleton />}>
        <MemberCards group_id={group_project.group_id} />
      </Suspense>

      <section>
        <header className="w-full flex items-center justify-between gap-10">
          <h2 className="text-text2/90">Tareas</h2>
          <Button asChild variant="link">
            <Link href="/dashboard/tareas">Ver todas las Tareas</Link>
          </Button>
        </header>
        <div className="grid grid-cols-3 gap-x-20 gap-y-10 w-full py-10 border-b border-gray-200 dark:border-gray-600/70">


          <article className="flex flex-col items-start gap-3 bg-card shadow-md p-4 rounded-lg">
            <header className="w-full flex items-start justify-between border-b border-red-200 pb-4">
              <h3 className="text-text2/80">Arquitectura de Información</h3>
              <Avatar className="size-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </header>
            <div>
              <strong className="text-primary/90 font-medium text-sm">Sin asignar</strong>
            </div>
          </article>
          <article className="flex flex-col items-start gap-3 bg-card shadow-md p-4 rounded-lg">
            <header className="w-full flex items-start justify-between border-b border-red-200 pb-4">
              <h3 className="text-text2/80">Arquitectura de Información</h3>
              <Avatar className="size-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </header>
            <div>
              <strong className="text-primary/90 font-medium text-sm">Sin asignar</strong>
            </div>
          </article>
          <article className="flex flex-col items-start gap-3 bg-card shadow-md p-4 rounded-lg">
            <header className="w-full flex items-start justify-between border-b border-red-200 pb-4">
              <h3 className="text-text2/80">Arquitectura de Información</h3>
              <Avatar className="size-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </header>
            <div>
              <strong className="text-primary/90 font-medium text-sm">Sin asignar</strong>
            </div>
          </article>
          <article className="flex flex-col items-start gap-3 bg-card shadow-md p-4 rounded-lg">
            <header className="w-full flex items-start justify-between border-b border-red-200 pb-4">
              <h3 className="text-text2/80">Arquitectura de Información</h3>
              <Avatar className="size-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </header>
            <div>
              <strong className="text-primary/90 font-medium text-sm">Sin asignar</strong>
            </div>
          </article>
          <article className="flex flex-col items-start gap-3 bg-card shadow-md p-4 rounded-lg">
            <header className="w-full flex items-start justify-between border-b border-red-200 pb-4">
              <h3 className="text-text2/80">Arquitectura de Información</h3>
              <Avatar className="size-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </header>
            <div>
              <strong className="text-primary/90 font-medium text-sm">Sin asignar</strong>
            </div>
          </article>


        </div>

        <div className="py-20">
          proyectos
        </div>

      </section>
    </main>
  )
}