import {MONTHS, CURRENT_YEAR} from './constants/calendar';
import {MonthSection} from "./components/MonthSection"
import { calendarEntries } from "./data/calenderEntries";

export default function App() {
  return (
   <div
      className="
        h-screen 
        overflow-y-scroll 
        snap-y  
        snap-mandatory
        scroll-smooth
      "
    >
      {MONTHS.map((month, index) => (
        <MonthSection
    key={month}
    month={month}
    year={CURRENT_YEAR}
    monthIndex={index}
    entries={calendarEntries}
  />
      ))}
    </div>
  )
}
