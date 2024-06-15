import { Button } from "@/components/ui/button"
import { Raleway } from "@/lib/fonts";
import { Card1 } from "@/app/_root-components/Cards"
import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import Link from "next/link";

export default function Home() {
  // rgba(0, 122, 192, 0.10);
  return (
    <div className="relative min-h-screen overflow-hidden w-full">
      <Card1 className="bottom-36 left-28 z-10" />
      <Card1 className="top-36 right-28 z-10" />
      <Card1 className="top-64 left-96 z-10 filter blur-sm w-56 h-16" width="30" height="30" />

      <svg className="absolute top-0 left-0 -z-10 scale-110" xmlns="http://www.w3.org/2000/svg" width="528" height="680" viewBox="0 0 528 680" fill="none">
        <g opacity="0.2" filter="url(#filter0_f_9_500)">
          <path d="M58.4335 599.153C-76.5884 599.207 -41.8002 419.502 -41.8442 308.039C-41.8882 196.575 -76.817 20.2068 58.2049 20.1535C193.227 20.1002 447.07 196.382 447.114 307.846C447.158 419.309 193.456 599.1 58.4335 599.153Z" fill="#FFC286" />
        </g>
        <defs>
          <filter id="filter0_f_9_500" x="-125.937" y="-59.8466" width="653.05" height="739" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_9_500" />
          </filter>
        </defs>
      </svg>

      <svg className="absolute bottom-0 right-0 -z-10 scale-110" xmlns="http://www.w3.org/2000/svg" width="492" height="637" viewBox="0 0 492 637" fill="none">
        <g opacity="0.2" filter="url(#filter0_f_9_267)">
          <path d="M454.435 100.062C578.566 98.6861 548.424 271.064 549.607 377.771C550.789 484.478 584.708 652.978 460.576 654.353C336.445 655.729 101.271 489.459 100.088 382.752C98.9059 276.045 330.304 101.437 454.435 100.062Z" fill="#FFC286" />
        </g>
        <defs>
          <filter id="filter0_f_9_267" x="0.0837402" y="0.0533447" width="654.626" height="754.308" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_9_267" />
          </filter>
        </defs>
      </svg>

      <header className="z-20 bg-background py-8 border-b border-border w-full">
        <div className="container flex items-center justify-between">
          <strong className={`text-3xl text-primary font-bold ${Raleway.className}`}>Hive5</strong>
          <div className="flex items-center gap-4">
            <SignedOut>
              <Button variant="outline" className="min-w-28 rounded-lg opacity-80">
                <SignUpButton>
                  Iniciar
                </SignUpButton>
              </Button>
            </SignedOut>
            <SignedIn>
              <SignOutButton />
            </SignedIn>
          </div>
        </div>
      </header>
      <main className="relative container flex items-center justify-center py-56">
        <div className="flex flex-col gap-5 items-center justify-center w-full max-w-5xl">
          <h1 className={`relative py-1 text-5xl font-semibold text-primary ${Raleway.className}`}>
            Vota y Colabora:
            <svg className="absolute -top-7 left-0" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400"><path d="M-0.8968609571456909,203.5874481201172C26.60687663157781,200.89686330159506,108.66966074705124,190.73242950439453,164.1255645751953,187.44393920898438C219.5814684033394,184.15544891357422,271.1509730021159,183.25859832763672,331.83856201171875,183.85650634765625C392.5261510213216,184.45441436767578,468.1614074707031,188.78923543294272,528.2510986328125,191.03138732910156C588.3407897949219,193.2735392252604,647.3841756184896,198.2062784830729,692.376708984375,197.30941772460938C737.3692423502604,196.41255696614584,780.5680338541666,187.59342193603516,798.206298828125,185.6502227783203" fill="none" strokeWidth="9" stroke="hsl(30 92% 58%)" strokeLinecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1005"><stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop><stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
          </h1>
          <strong className={`text-5xl font-semibold text-text1 dark:text-white ${Raleway.className}`}>Transforma tus Proyectos</strong>
          <p className="text-lg text-text2/80 text-center px-8 py-3">uCount te abre las puertas a la colaboración precisa y oportuna, en tus grupos de trabajo.<br /> Descubre como pueden votar propuestas y organizar tareas grupales.</p>

          <SignedOut>
            <Button asChild size="lg" className="smooth-shadow font-semibold text-lg dark:text-white">
              <SignInButton mode="modal">
                Comenzar
              </SignInButton>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button asChild size="lg" className="smooth-shadow font-semibold text-lg dark:text-white">
              <Link href="/dashboard"></Link>
            </Button>
          </SignedIn>
        </div>
      </main>
    </div>
  );
}
