import { Raleway } from "@/lib/fonts";
import { UserButton, SignedIn } from "@clerk/nextjs";
import ToggleTheme from "@/components/toggle-theme"
import Image from "next/image";
import { NavLinks } from "@/components/NavLinks";

export default function DashLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full flex bg-background">
      <aside className="bg-card dark:bg-card p-14 max-w-[200px] border-r border-black/10 min-h-screen h-full flex flex-col items-center justify-between">
        <div className="flex flex-col items-center gap-20">
          <header className="flex items-center justify-center gap-4">
            <Image src="/logo-primary.png" alt="Logo de Hive5" width={35} height={35} />
            <strong className={`text-3xl text-text1 dark:text-white font-bold ${Raleway.className}`}>Hive5</strong>
          </header>
          <nav>
            <NavLinks />
          </nav>
        </div>
        <footer className="flex items-center justify-between gap-5">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ToggleTheme />
        </footer>
      </aside>
      {children}
    </div>
  )
}