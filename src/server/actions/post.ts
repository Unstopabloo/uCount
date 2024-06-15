"use server"

import { turso } from "@/lib/turso"
import { auth, currentUser } from "@clerk/nextjs/server"

auth().protect()

export const createGroup = async () => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  // get user
  const { rows } = await turso.execute({
    sql: "SELECT id FROM users WHERE clerk_id = :clerk_id",
    args: {
      clerk_id: userId,
    }
  })

  const user_id = rows[0].id
  const end_date = new Date()
  const end = end_date.setDate(end_date.getMonth() + 2)

  // create group
  const { rows: groupCreated } = await turso.execute({
    sql: "INSERT INTO groups (name, description, created_by, start_date, end_date) VALUES (:name, :description, :created_by, :start_date, :end_date) RETURNING *",
    args: {
      name: "Grupo de Ejemplo",
      description: "Descripción del Grupo",
      created_by: user_id,
      start_date: new Date(),
      end_date: end
    }
  })
}

export const addUserToGroup = async (users: any[]) => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  // const { rows: users } = await turso.execute("SELECT id FROM users WHERE is_admin = 0");

  // console.log("users", users)

  // Insert into group
  users.forEach(async (user) => {
    const { rows: inserted } = await turso.execute({
      sql: "INSERT INTO user_groups (user_id, group_id) VALUES (:user_id, :group_id) RETURNING *",
      args: {
        user_id: user.id,
        group_id: 1
      }
    })

    console.log("inserted", inserted)
  })
  console.log("Se finalizo la inserción")
}

export const insertGroupLeader = async ({ group_id, user_id }: { group_id: number, user_id: number }) => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  const { } = await turso.execute({
    sql: "UPDATE groups SET leader_id = :user_id WHERE id = :group_id",
    args: {
      user_id,
      group_id
    }
  })

}

export const createProject = async ({ user_id }: { user_id: number }) => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  const end = new Date()
  const end_date = end.setDate(end.getMonth() + 2)

  const { rows: res } = await turso.execute({
    sql: "INSERT INTO projects (title, description, created_by, start_date, end_date) VALUES (:title, :description, :created_by, :start_date, :end_date)",
    args: {
      title: "Rediseño Sitio Colegio",
      description: "Rediseño de la web de un colegio para el examen",
      created_by: user_id,
      start_date: new Date(),
      end_date
    }
  })
}

export const addGroupToProject = async ({ project_id, group_id }: { project_id: number, group_id: number }) => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  const { rows: res } = await turso.execute({
    sql: "INSERT INTO group_projects (project_id, group_id) VALUES (:project_id, :group_id) RETURNING *",
    args: {
      project_id,
      group_id
    }
  })

  console.log("res", res)
}