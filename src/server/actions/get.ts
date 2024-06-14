"use server"

import { turso } from "@/lib/turso"
import { auth, currentUser } from "@clerk/nextjs/server"


// ---- Users ----
export const getUsers = async () => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  const { rows } = await turso.execute("SELECT * FROM users")

  // console.log("users", rows)
  return rows
}

export const getCurrentUser = async () => {
  const user = await currentUser()

  if (!user) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  const { rows } = await turso.execute({
    sql: "SELECT * FROM users WHERE clerk_id = :clerk_id",
    args: {
      clerk_id: user.id,
    }
  })

  // console.log("me", rows)
  return rows
}


// ---- Grupos ----
// ---- Proyectos ----
// ---- Tareas ----
// ---- Topicos ----
// ---- Comentarios ----