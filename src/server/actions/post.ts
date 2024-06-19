"use server"

import { turso } from "@/lib/turso"
import { auth } from "@clerk/nextjs/server"
import { addMonth } from "@formkit/tempo"

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
  const end = addMonth(end_date, 2).toISOString()

  console.log("end", end)

  // create group
  const { rows: groupCreated } = await turso.execute({
    sql: "INSERT INTO groups (name, description, created_by, start_date, end_date) VALUES (:name, :description, :created_by, :start_date, :end_date) RETURNING *",
    args: {
      name: "Diseñando experiencias",
      description: "Centrados de diseño de experiencias",
      created_by: user_id,
      start_date: new Date().toISOString(),
      end_date: end
    }
  })
}

export const addUserToGroup = async () => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  const { rows: users } = await turso.execute("SELECT id FROM users WHERE is_admin = 0");

  console.log("users", users)

  // Insert into group
  users.forEach(async (user) => {
    const { rows: inserted } = await turso.execute({
      sql: "INSERT INTO user_groups (user_id, group_id) VALUES (:user_id, :group_id) RETURNING *",
      args: {
        user_id: user.id,
        group_id: 8
      }
    })

    console.log("inserted", inserted)
  })
  console.log("Se finalizo la inserción")
}

export const insertGroupLeader = async () => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  await turso.execute({
    sql: "UPDATE groups SET leader_id = :user_id WHERE id = :group_id",
    args: {
      user_id: 6,
      group_id: 8
    }
  })

}

export const createProject = async () => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  const end = new Date()
  const end_date = addMonth(end, 2).toISOString()

  await turso.execute({
    sql: "INSERT INTO projects (title, description, created_by, start_date, end_date, is_active) VALUES (:title, :description, :created_by, :start_date, :end_date, :is_active) RETURNING *",
    args: {
      title: "Rediseño Sitio Colegio",
      description: "Rediseño de la web de un colegio para el examen",
      created_by: 1,
      start_date: new Date().toISOString(),
      end_date,
      is_active: true
    }
  })
}

export const addGroupToProject = async () => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  const { rows: res } = await turso.execute({
    sql: "INSERT INTO group_projects (project_id, group_id) VALUES (:project_id, :group_id) RETURNING *",
    args: {
      project_id: 4,
      group_id: 8
    }
  })

  console.log("res", res)
}