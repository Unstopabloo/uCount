import { Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export async function FullTaskCards() {
  return (
    <article className="bg-card rounded-lg p-4 flex flex-col gap-4">
      <header className="flex items-center justify-between gap-4">
        <h3>Nombre Tarea</h3>
        <div className="flex items-center justify-between min-w-[50%] gap-6">
          <span>Fecha de tarea</span>
          <div className="flex items-center gap-4">Responsable:
            <Avatar>
              <AvatarFallback>CN</AvatarFallback>
              <AvatarImage src="" />
            </Avatar>
          </div>
        </div>
      </header>
      <p className="text-text2/80 max-w-[1300px]">Texto representativoTexto representativoTexto representativoTexto representativoTexto representativoTexto representativo Texto representativoTexto representativoTexto representativoTexto representativoTexto representativoTexto representativoTexto representativoTexto representativoTexto representativo</p>
      <footer className="flex items-center justify-end">
        <Button className="flex items-center gap-4">Agregar Tópico <Plus size={17} /></Button>
      </footer>
    </article>
  )
}