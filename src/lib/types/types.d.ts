interface Member {
  user_id: number
  group_id: number
  username: string
  full_name: string
  email: string
  leader_id: number
}

interface Proyecto {
  project_id: number;
  title: string;
  description: string;
  start_date: number;
  end_date: number;
}

interface ProyectoData {
  proyecto: Proyecto;
  members: Member[]
}