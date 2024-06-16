import { MemberCards } from "@/components/proyectos/MemberCards";
import { getActualProjectData } from "@/server/actions/get";

export default async function Proyectos() {
  const proyecto = await getActualProjectData({ group_id: 1 })
  console.log(proyecto)

  return (
    <main className="py-16 px-28 relative flex flex-col h-screen overflow-hidden w-full">
      <header className="w-full flex items-center justify-between">
        <h1 className="text-base font-semibold">Rediseño Sitio Colegio Duoc UC</h1>
        <time className="text-sm">19 de Junio - 10 de Julio</time>
        <span className="text-sm"><strong>Profesor: </strong>Lorem</span>
      </header>
      <div className="w-full flex flex-col gap-3 py-8">
        <div className="flex items-center gap-2">
          <div className="size-2 bg-primary animate-pulse p-1 rounded-full"></div>
          <span aria-label="Marca de proyecto actual" className="text-sm text-primary">Proyecto actual</span>
        </div>
        <p className="text-pretty max-w-[800px] text-text2/90 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
      </div>

      <section aria-label="Miembros del grupo del proyecto actual">
        <header className="w-full flex items-center gap-10">
          <h2 className="text-text2 ">Miembros</h2>
          <span className="text-text2/80 text-sm">Grupo: <i>Diseñando experiencias</i></span>
        </header>
        <div className="grid grid-cols-3 gap-x-20 gap-y-10 w-full py-10">
          {/* <MemberCards /> */}
        </div>
      </section>
    </main>
  )
}