interface Member {
  user_id: number;
  group_id: number;
  username: string;
  full_name: string;
  email: string;
  leader_id: number;
  profile_pic: string;
}

interface Proyecto {
  project_id: number;
  title: string;
  description: string;
  start_date: Date | string;
  end_date: Date | string;
  is_active: boolean;
  created_by: string;
  group_name: string;
}

interface ProyectoData {
  proyecto: Proyecto;
  members: Member[]
}

interface Task {
  task_id: number;
  title: string;
  description: string;
  created_by: string;
  assigned_to: string;
  start_date: string;
  end_date: string;
}

interface GroupProject {
  group_id: number;
  project_id: number;
}