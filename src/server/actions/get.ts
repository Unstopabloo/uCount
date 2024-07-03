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

export const getLeaderGroup = async () => {
  const { userId } = auth()

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página')
  }

  const res: { rows: any[] } = await turso.execute({
    sql: `SELECT
            CASE
              WHEN users.id = GROUPS.leader_id THEN true
              ELSE false
            END AS is_leader
          FROM
            users
            LEFT JOIN user_groups ON user_groups.user_id = users.id
            LEFT JOIN group_projects ON group_projects.group_id = user_groups.group_id
            LEFT JOIN projects ON group_projects.project_id = projects.id
            LEFT JOIN GROUPS ON GROUPS.id = user_groups.group_id
          WHERE
            users.clerk_id = :clerk_id
            AND projects.is_active = true;`,
    args: {
      clerk_id: userId
    }
  })

  const leader: Leader = {
    leader: res.rows[0].is_leader
  }

  const response = leader.leader === true ? leader.leader = true : leader.leader = false
  return response
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
export const getActualGroup = async () => {
  const { userId } = auth();

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página');
  }

  const group: { rows: any[] } = await turso.execute({
    sql: `SELECT
            user_groups.group_id,
            projects.id as project_id
          FROM
            users
            LEFT JOIN user_groups ON user_groups.user_id = users.id
            LEFT JOIN group_projects ON group_projects.group_id = user_groups.group_id
            LEFT JOIN projects ON group_projects.project_id = projects.id
          WHERE users.clerk_id = :clerk_id
          AND projects.is_active = true;`,
    args: {
      clerk_id: userId
    }
  });

  if (group.rows.length === 0) {
    throw new Error('No se encontraron proyectos activos para este grupo');
  }

  const res: GroupProject = {
    group_id: group.rows[0].group_id,
    project_id: group.rows[0].project_id
  }
  return res
}

export const getActualProjectData = async ({ group_id }: { group_id: number }): Promise<Proyecto> => {
  // Obtener todos los datos de un proyecto activo junto a todos los miembros del grupo adherido
  const { userId } = auth();

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página');
  }

  try {
    const projectResult: { rows: any[] } = await turso.execute({
      sql: `SELECT
              projects.id AS project_id,
              projects.title,
              projects.description,
              projects.start_date,
              projects.end_date,
              projects.is_active,
              users.username AS created_by,
              groups.name AS group_name
            FROM
              group_projects
              JOIN projects ON projects.id = group_projects.project_id
              JOIN users ON users.id = projects.created_by
              JOIN groups ON groups.id = group_projects.group_id
            WHERE
              group_projects.group_id = :group_id
              AND projects.is_active = true;`,
      args: {
        group_id
      }
    });

    if (projectResult.rows.length === 0) {
      throw new Error('No se encontraron proyectos activos para este grupo');
    }

    // Convertimos los resultados a los tipos esperados, asegurándonos de que no hay valores nulos
    const proyecto: Proyecto = {
      project_id: projectResult.rows[0].project_id,
      title: projectResult.rows[0].title,
      description: projectResult.rows[0].description,
      start_date: projectResult.rows[0].start_date,
      end_date: projectResult.rows[0].end_date,
      is_active: projectResult.rows[0].is_active,
      created_by: projectResult.rows[0].created_by,
      group_name: projectResult.rows[0].group_name
    };

    return proyecto;

  } catch (e) {
    console.log(e);
    throw new Error('Error al obtener los datos del proyecto actual');
  }
};

export const getMembersProject = async ({ group_id }: { group_id: number }): Promise<Member[]> => {
  const { userId } = auth();

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página');
  }

  try {
    const memberResult: { rows: any[] } = await turso.execute({
      sql: `SELECT
              users.id AS user_id,
              user_groups.group_id,
              users.username,
              users.full_name,
              users.email,
              users.profile_pic,
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
    });

    if (memberResult.rows.length === 0 || memberResult.rows.length === undefined) {
      throw new Error('No se encontraron proyectos activos para este grupo');
    }

    const members: Member[] = memberResult.rows.map(row => ({
      user_id: row.user_id,
      group_id: row.group_id,
      username: row.username,
      full_name: row.full_name,
      email: row.email,
      profile_pic: row.profile_pic,
      leader_id: row.leader_id
    }));

    return members;

  } catch (e) {
    console.log(e);
    throw new Error('Error al obtener los datos de los miembros actuales');
  }
}

// ---- Tareas ----
export const getLastTasks = async ({ project_id }: { project_id: number }) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error('No estas autenticado para acceder a esta página');
  }

  const res: { rows: any[] } = await turso.execute({
    sql: "SELECT * FROM tasks WHERE project_id = :project_id LIMIT 3",
    args: {
      project_id
    }
  })

  if (res.rows.length === undefined) {
    throw new Error('No se encontraron proyectos activos para este grupo');
  }

  const tasks: Task[] = res.rows.map(task => ({
    task_id: task.id,
    title: task.title,
    description: task.description,
    created_by: task.created_by,
    assigned_to: task.assigned_to,
    start_date: task.start_date,
    end_date: task.end_date
  }))

  return tasks
}
// ---- Topicos ----
// ---- Comentarios ----