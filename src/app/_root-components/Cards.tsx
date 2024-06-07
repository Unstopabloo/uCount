export function Card1({ className, width = "70", height = "70" }: { className?: string, width?: string, height?: string }) {
  return (
    <div className={`absolute flex items-center justify-center gap-4 opacity-90 float ${className}`}>
      <div className="rounded-lg bg-[#00C2E0] p-2 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 80 80" fill="none">
          <path d="M61.61 55.89C57.0539 56.984 52.2976 56.931 47.767 55.7357C43.2364 54.5405 39.073 52.2402 35.6495 49.0411C32.226 45.8419 29.6494 41.8436 28.1504 37.4042C26.6514 32.9648 26.2767 28.223 27.06 23.6033C26.9409 23.7184 26.8151 23.8263 26.6833 23.9267C25.75 24.6367 24.5833 24.9 22.25 25.4267L20.1333 25.9067C11.9333 27.7633 7.83334 28.69 6.85668 31.8267C5.88334 34.96 8.67668 38.23 14.2667 44.7667L15.7133 46.4567C17.3 48.3133 18.0967 49.2433 18.4533 50.39C18.81 51.54 18.69 52.78 18.45 55.2567L18.23 57.5133C17.3867 66.2367 16.9633 70.5967 19.5167 72.5333C22.07 74.4733 25.91 72.7067 33.5833 69.17L35.5733 68.2567C37.7533 67.25 38.8433 66.75 40 66.75C41.1567 66.75 42.2467 67.25 44.43 68.2567L46.4133 69.17C54.09 72.7033 57.93 74.47 60.48 72.5367C63.0367 70.5967 62.6133 66.2367 61.77 57.5133L61.61 55.89Z" fill="#1E192B" />
          <path d="M30.51 18.0267L29.4166 19.9867C28.2166 22.14 27.6166 23.2167 26.6833 23.9267C26.8166 23.8267 26.94 23.72 27.06 23.6033C26.2765 28.2233 26.6511 32.9656 28.1503 37.4053C29.6495 41.845 32.2264 45.8435 35.6503 49.0428C39.0742 52.2421 43.2381 54.5422 47.7692 55.7372C52.3003 56.9322 57.057 56.9847 61.6133 55.89L61.5466 55.2567C61.31 52.78 61.19 51.54 61.5466 50.39C61.9033 49.2433 62.6966 48.3133 64.2866 46.4567L65.7333 44.7667C71.3233 38.2333 74.1166 34.9633 73.14 31.8267C72.1666 28.69 68.0666 27.76 59.8666 25.9067L57.7466 25.4267C55.4166 24.9 54.25 24.6367 53.3133 23.9267C52.38 23.2167 51.78 22.14 50.58 19.9867L49.49 18.0267C45.2666 10.4533 43.1566 6.66666 40 6.66666C36.8433 6.66666 34.7333 10.4533 30.51 18.0267Z" fill="white" />
        </svg>
      </div>
      <div className="flex flex-col items-start justify-center gap-4 opacity-90 bg-white border-[1px] border-slate-200/80 rounded-lg w-56 p-4 h-full">
        <div className="bg-slate-600/80 h-2 rounded-full w-full"></div>
        <div className="bg-slate-600/80 h-2 rounded-full w-10/12"></div>
        <div className="bg-slate-600/80 h-2 rounded-full w-10/12"></div>
      </div>
    </div>
  )
}

export function Card2({ className }: { className?: string }) {
  return (
    <div className={`absolute flex items-center justify-center gap-4 opacity-90 float ${className}`}>
      <div className="rounded-lg bg-[#00C2E0] p-2 text-center">

      </div>
    </div>
  )
}