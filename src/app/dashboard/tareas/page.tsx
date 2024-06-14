import { getCurrentUser } from "@/server/actions/get"

export default async function Tareas() {
  const users = await getCurrentUser()

  return (
    <div className="py-16 px-28 relative grid grid-cols-3 h-screen overflow-hidden w-full">

    </div>
  )
}