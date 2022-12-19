// a function that takes two dates and returns the difference in years
export const getDateDiff = (
  startDateString: string | Date,
  endDateString: string | Date
) => {
  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const diff = endDate.getTime() - startDate.getTime();
  const year = 1000 * 60 * 60 * 24 * 365;

  // round to nearest half year
  return Math.round((diff / year) * 2) / 2;
};

// format date to mm-yyyy complementing month if needed
export const formatDateMonthYear = (date: string | Date) => {
  const d = new Date(date);
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return `${month.toString().padStart(2, "0")}-${year}`;
};
