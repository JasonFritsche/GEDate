import { shortMonths, longMonths } from '../constants/months';

export const formatMonth = (dateToFormat: Date, monthFormat: string): string => {
  // MM is short month "Apr"
  // MMM is long month example "April"
  // mm is month number 1-12
  // format month and return as string

  let formattedMonth = dateToFormat.getMonth().toString();

  const splitMonthFormat = monthFormat.split('');
  if (splitMonthFormat.length === 2) {
    // should either be mm or MM
    if (splitMonthFormat.every((letter) => letter === 'm')) {
      // we have 2 lowercase m's
      formattedMonth = dateToFormat.getMonth().toString();
    } else if (splitMonthFormat.every((letter) => letter === 'M')) {
      // we have 2 uppercase M's
      const month = dateToFormat.getMonth();
      formattedMonth = shortMonths[month];
    }
  } else if (splitMonthFormat.length === 3) {
    if (splitMonthFormat.every((letter) => letter === 'M')) {
      // we have 3 uppercase M's
      const month = dateToFormat.getMonth();
      formattedMonth = longMonths[month];
    } else {
      console.log('error');
    }
  }
  return formattedMonth;
};
