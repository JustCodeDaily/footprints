export function getFirstDayOfTheWeek(date:Date): number {
    const day = date.getDay();
    return (day + 6) % 7
}

export function getDaysInMonth(year: number, monthIndex: number): number {
  return new Date(year, monthIndex + 1, 0).getDate();
}