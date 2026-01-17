import { WEEKDAYS } from "../constants/calendar";

export function WeekDayHeader () {
    return (
    <div
      className="
        grid 
        grid-cols-7 
        gap-x-4
        text-xs
        tracking-widest
        text-neutral-500
        select-none
      "
    >
      {WEEKDAYS.map((day) => (
        <div
          key={day}
          className="text-center"
        >
          {day}
        </div>
      ))}
    </div>
  );
}