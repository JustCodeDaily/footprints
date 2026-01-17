import { WeekDayHeader } from "./WeekDayHeader";
import { CalendarGrid } from "./CalendarGrid";

interface MonthSectionProps {
  month: string;
  year: number;
  monthIndex: number;
}

interface MonthSectionProps {
  month: string;
  year: number;
  monthIndex: number;
}

export function MonthSection({ month, year, monthIndex }: MonthSectionProps) {
  return (
    <section
      className="
        h-screen 
        snap-start  
        bg-[#faf8f4]
        relative
        overflow-hidden
      "
    >
      <div className="relative flex flex-col items-center pt-16"></div>

      <div
        className="
    absolute
    inset-0
    pointer-events-none
    opacity-[0.04]
    bg-[radial-gradient(#000_1px,transparent_1px)]
    [background-size:18px_18px]
  "
      />
      {/* Month title */}

      <div className="mb-14 text-center">
        <h1 className="font-serif text-5xl text-neutral-800">{month}</h1>
        <p className="mt-2 text-xs tracking-[0.3em] text-neutral-500 uppercase">
          {year}
        </p>
      </div>
      <div
        className="
    absolute
    left-1/2
    top-1/2
    -translate-x-1/2
    -translate-y-1/2
  "
      >
        <div className="w-[360px]">
          <WeekDayHeader />
          <CalendarGrid year={year} monthIndex={monthIndex} />
        </div>
      </div>
    </section>
  );
}
