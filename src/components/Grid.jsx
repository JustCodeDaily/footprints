import JOURNAL from "../data/journal";

const YEAR = 2026;
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEKDAYS = ["M", "T", "W", "T", "F", "S", "S"];

/* ---------- Date helpers ---------- */

function generateDays(year) {
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  const days = [];

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const date = new Date(d);

    const key = [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-");

    days.push({
      date,
      month: date.getMonth(),
      entry: JOURNAL[key] || null,
    });
  }

  return days;
}

function groupByMonth(days) {
  const months = Array.from({ length: 12 }, () => []);
  days.forEach((day) => months[day.month].push(day));
  return months;
}

function getWeekdayColumn(date) {
  const day = date.getDay();
  return day === 0 ? 7 : day; // Monday = 1 ... Sunday = 7
}

/* ---------- Component ---------- */

export default function Grid() {
  const days = generateDays(YEAR);
  const months = groupByMonth(days);

  return (
    <div className="footprints-scroll">
      {months.map((monthDays, monthIndex) => (
        <section
          key={monthIndex}
          className="month-section"
        >
          <div className="month-block">
            <h2 className="month-title">
              {MONTHS[monthIndex]}
            </h2>

            {/* Weekday header */}
            <div className="weekday-row">
              {WEEKDAYS.map((d, i) => (
                <span key={i} className="weekday">
                  {d}
                </span>
              ))}
            </div>

            {/* Month grid */}
            <div className="grid">
              {monthDays.map((day) => (
                <div
                  key={day.date.toISOString()}
                  className={`cell ${day.entry ? "active" : ""}`}
                  title={day.entry || ""}
                  style={{
                    gridColumnStart: getWeekdayColumn(day.date),
                  }}
                >
                  <span className="day-number">
                    {day.date.getDate()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
