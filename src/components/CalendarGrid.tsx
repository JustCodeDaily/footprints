import {
  getFirstDayOfTheWeek,
  getDaysInMonth,
} from "../utilities";

interface CalendarGridProps {
    rows?: number;
    year: number;
    monthIndex:number;
}

export function CalendarGrid({year, monthIndex}:CalendarGridProps) {
    const firstDayOfMonth = new Date(year, monthIndex, 1);
      const daysInMonth = getDaysInMonth(year, monthIndex);
  const startOffset = getFirstDayOfTheWeek(firstDayOfMonth);

   const totalCells = 42;


return (
    <div className="mt-8 grid grid-cols-7 gap-y-6">
      {Array.from({ length: totalCells }).map((_, index) => {
        const dayNumber = index - startOffset + 1;
        const isValidDay =
          dayNumber > 0 && dayNumber <= daysInMonth;

        return (
          <div
            key={index}
            className="
              h-6
              text-center
              text-sm
              font-sans
              select-none
              text-neutral-700
            "
          >
            {isValidDay ? dayNumber : ""}
          </div>
        );
      })}
    </div>
  );
}

