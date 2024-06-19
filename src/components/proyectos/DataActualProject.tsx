import { getActualProjectData } from "@/server/actions/get";
import { format } from "@formkit/tempo";

export async function DataActualProject({ group_id }: { group_id: number }) {
  const proyecto = await getActualProjectData({ group_id })

  return (
    <>
      <header className="w-full flex items-center justify-between">
        <h1 className="text-base font-semibold">{proyecto.title}</h1>
        <time className="text-sm">{format(proyecto.start_date, 'long', 'es')} <span className="inline-flex px-4">/</span> {format(proyecto.end_date, 'long', 'es')}</time>
        <span className="text-sm"><strong>Profesor: </strong>{proyecto.created_by}</span>
      </header>
      <div className="w-full flex flex-col gap-3 py-8">
        {
          proyecto.is_active && (
            <div className="flex items-center gap-2">
              <div className="size-2 bg-primary animate-pulse p-1 rounded-full"></div>
              <span aria-label="Marca de proyecto actual" className="text-sm text-primary">Proyecto actual</span>
            </div>
          )
        }
        <p className="text-pretty max-w-[800px] text-text2/90 text-sm">{proyecto.description}</p>
      </div>

      <div className="w-full flex items-center gap-10">
        <h2 className="text-text2/90">Miembros</h2>
        <span className="text-text2/80 text-sm">Grupo: <i>{proyecto.group_name}</i></span>
      </div>
    </>
  )
}