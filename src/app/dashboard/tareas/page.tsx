"use client"

import { Button } from "@/components/ui/button"
import { addUserToGroup, createGroup, insertGroupLeader, createProject, addGroupToProject } from "@/server/actions/post"
import { getUsersGroup } from "@/server/actions/get"

export default async function Tareas() {

  return (
    <div className="py-16 px-28 relative grid grid-cols-3 h-screen overflow-hidden w-full">
      <Button onMouseDown={() => addGroupToProject({ group_id: 1, project_id: 1 })}>Crear cosas</Button>
    </div>
  )
} 