import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/utils/getInitials";
import { getMembersProject } from "@/server/actions/get";

export async function MemberCards({ group_id }: { group_id: number }) {
  const membersProject = await getMembersProject({ group_id })

  return (
    <div className="grid grid-cols-3 gap-x-20 gap-y-10 w-full py-10">
      {membersProject.map((member) => (
        <article key={member.user_id} className="flex flex-col items-start gap-3 bg-card shadow-md p-4 rounded-lg">
          <header className="flex items-center justify-between gap-4 border-b w-full border-slate-100 dark:border-slate-800 pb-6">
            <div className="flex items-center gap-2">
              <Avatar className="size-8">
                <AvatarImage src={member.profile_pic} />
                <AvatarFallback>{getInitials(member.full_name)}</AvatarFallback>
              </Avatar>
              <h3 className="text-text2 font-semibold">{member.full_name}</h3>
            </div>
          </header>
          <div className="flex items-end justify-between gap-4 w-full">
            <div className="flex flex-col items-start justify-between">
              <h4 aria-label="Nombre de usuario" className="text-text2/80">{member.username}</h4>
              <small aria-label="Correo de usuario" className="text-text2/70">{member.email}</small>
            </div>
            <div className="size-6 p-2 rounded-full bg-primary/70 text-white text-xs flex items-center justify-center">R</div>
          </div>
        </article>
      ))}
    </div>
  )
}