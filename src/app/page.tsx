import { Button } from "@/components/ui/button"
import { Raleway } from "@/lib/fonts";
import { Card1 } from "@/app/_root-components/Cards"
import { SignInButton, SignOutButton } from '@clerk/nextjs'

export default function Home() {
  // rgba(0, 122, 192, 0.10);
  return (
    <div className="relative min-h-screen overflow-hidden w-full">
      <Card1 className="bottom-36 left-28 z-10" />
      <Card1 className="top-36 right-28 z-10" />
      <Card1 className="top-64 left-96 z-10 filter blur-sm w-56 h-16" width="30" height="30" />
      <svg className="absolute top-0 left-0 -z-10 scale-110" xmlns="http://www.w3.org/2000/svg" width="575" height="650" viewBox="0 0 575 650" fill="none">
        <g filter="url(#filter0_f_9_500)">
          <path d="M105.434 569.153C-29.5884 569.207 5.19978 389.502 5.15577 278.039C5.11176 166.575 -29.817 -9.79317 105.205 -9.84649C240.227 -9.8998 494.07 166.382 494.114 277.846C494.158 389.309 240.456 569.1 105.434 569.153Z" fill="#007AC0" fill-opacity="0.1" />
        </g>
        <defs>
          <filter id="filter0_f_9_500" x="-78.9365" y="-89.8466" width="653.05" height="739" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_9_500" />
          </filter>
        </defs>
      </svg>
      <svg className="absolute bottom-0 right-0 -z-10 scale-110" xmlns="http://www.w3.org/2000/svg" width="525" height="638" viewBox="0 0 525 638" fill="none">
        <g filter="url(#filter0_f_9_267)">
          <path d="M434.435 80.0615C558.566 78.6861 528.424 251.064 529.607 357.771C530.789 464.478 564.708 632.978 440.576 634.353C316.445 635.729 81.2706 469.459 80.0883 362.752C78.9059 256.045 310.304 81.4369 434.435 80.0615Z" fill="#007AC0" fill-opacity="0.1" />
        </g>
        <defs>
          <filter id="filter0_f_9_267" x="0.0837402" y="0.0533447" width="614.626" height="714.308" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_9_267" />
          </filter>
        </defs>
      </svg>
      <header className="z-20 bg-white py-8 border-b border-border w-full">
        <div className="container flex items-center justify-between">
          <strong className={`text-3xl text-primary font-bold ${Raleway.className}`}>uCount</strong>
          <Button className="min-w-28 rounded-lg opacity-80">Iniciar</Button>
        </div>
      </header>
      <main className="relative container flex items-center justify-center py-56">
        <div className="flex flex-col gap-5 items-center justify-center w-full max-w-5xl">
          <h1 className={`relative py-1 text-5xl font-semibold text-primary ${Raleway.className}`}>
            Vota y Colabora:
            <svg className="absolute -top-7 left-0" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 400"><path d="M-0.8968609571456909,203.5874481201172C26.60687663157781,200.89686330159506,108.66966074705124,190.73242950439453,164.1255645751953,187.44393920898438C219.5814684033394,184.15544891357422,271.1509730021159,183.25859832763672,331.83856201171875,183.85650634765625C392.5261510213216,184.45441436767578,468.1614074707031,188.78923543294272,528.2510986328125,191.03138732910156C588.3407897949219,193.2735392252604,647.3841756184896,198.2062784830729,692.376708984375,197.30941772460938C737.3692423502604,196.41255696614584,780.5680338541666,187.59342193603516,798.206298828125,185.6502227783203" fill="none" strokeWidth="9" stroke="hsl(265, 55%, 20%)" strokeLinecap="round"></path><defs><linearGradient id="SvgjsLinearGradient1005"><stop stopColor="hsl(37, 99%, 67%)" offset="0"></stop><stop stopColor="hsl(316, 73%, 52%)" offset="1"></stop></linearGradient></defs></svg>
          </h1>
          <strong className={`text-5xl font-semibold ${Raleway.className}`}>Transforma tus Proyectos</strong>
          <p className="text-lg text-[#625F5F] text-center px-8 py-3">uCount te abre las puertas a la colaboración precisa y oportuna, en tus grupos de trabajo.<br /> Descubre como pueden votar propuestas y organizar tareas grupales.</p>
          <Button asChild size="lg" className="smooth-shadow font-semibold text-lg">
            <SignInButton mode="modal">
              Comenzar
            </SignInButton>
          </Button>
          <SignOutButton />
        </div>
      </main>
    </div>
  );
}
