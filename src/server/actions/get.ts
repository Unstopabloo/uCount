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
export const getUsersGroup = async ({ group_id }: { group_id: number }) => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  const { rows: group } = await turso.execute({
    sql: `SELECT 
            users.id,
            users.username,
            users.full_name,
            users.email,
            user_groups.group_id
          FROM users
          LEFT JOIN user_groups ON users.id = user_groups.user_id
          WHERE user_groups.group_id = :group_id`,
    args: {
      group_id
    }
  })

  console.log("group", group)
}

// ---- Proyectos ----
// ---- Tareas ----
// ---- Topicos ----
// ---- Comentarios ----