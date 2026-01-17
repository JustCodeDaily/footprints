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
        px-12
        pt-16
        relative
        overflow-hidden
      "
    >
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
      <div className="mb-10">
        <h1
          className="
    text-[clamp(3rem,6vw,4.5rem)]
    font-serif
    font-medium
    tracking-tight
    text-neutral-800
  "
        >
          {month}
        </h1>
        <p
          className="
    mt-2
    text-xs
    tracking-[0.3em]
    text-neutral-500
    uppercase
  "
        >
          {year}
        </p>
      </div>

      {/* Weekday header */}
      <WeekDayHeader />
      <CalendarGrid year={year} monthIndex={monthIndex} />
    </section>
  );
}
