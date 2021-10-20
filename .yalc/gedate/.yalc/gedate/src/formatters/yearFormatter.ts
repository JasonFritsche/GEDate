// format year and return as string
export const formatYear = (dateToFormat: Date, yearFormat: string) => {
  // yearFormat string can be either yy/YY, yyyy/YYYY otherwise it is invalid. if invalid, return as yy/YY.
  // yy/YY is short year. example "21". yyyy/YYYY is long year. example "2021"
  const splitYearFormat = yearFormat.split('');
  if (splitYearFormat.length === 2) {
    // should yy/YY
    return dateToFormat.getFullYear().toString().slice(-2);
  } else {
    return dateToFormat.getFullYear().toString();
  }
};
