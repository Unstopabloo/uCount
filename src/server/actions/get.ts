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
export const getActualProjectData = async ({ group_id }: { group_id: number }) => {
  // Obtener todos los datos de un proyecto activo junto a todos los miembros del grupo adherido
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  try {
    const { rows: data } = await turso.execute({
      sql: `SELECT
              projects.id AS project_id,
              projects.title,
              projects.description,
              projects.start_date,
              projects.end_date
            FROM
              group_projects
              JOIN projects ON projects.id = projects.id
            WHERE
              group_projects.group_id = :group_id
              AND projects.is_active = true;`,
      args: {
        group_id
      }
    })

    const { rows: members } = await turso.execute({
      sql: `SELECT
              users.id AS user_id,
              user_groups.group_id,
              users.username,
              users.full_name,
              users.email,
              groups.leader_id
            FROM
              user_groups
              JOIN users ON users.id = user_groups.user_id
              JOIN groups ON groups.id = user_groups.group_id
            WHERE
              user_groups.group_id = :group_id;`,
      args: {
        group_id
      }
    })

    const proyecto = {
      proyecto: data[0],
      members: members
    }

    return proyecto

  } catch (e) {
    console.log(e)
    throw new Error('Error al obtener los datos del proyecto actual')
  }
}

// ---- Tareas ----
// ---- Topicos ----
// ---- Comentarios ----