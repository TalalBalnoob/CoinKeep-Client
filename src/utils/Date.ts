export function getMonthName(month: number, locale: string = 'en-US'): string {
  // month is 1–12
  const date = new Date(2000, month, 1)
  return new Intl.DateTimeFormat(locale, { month: 'long' }).format(date)
}
