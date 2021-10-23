import { formatDay } from './dayFormatter';
import { formatMonth } from './monthFormatter';
import { formatYear } from './yearFormatter';

// default format if no format is provided or if format is invalid
export const defaultFormat = (dateToFormat: Date) => {
  const day = dateToFormat.getUTCDate();
  const month = dateToFormat.getUTCMonth();
  const year = dateToFormat.getUTCFullYear();
  return `${month}-${day}-${year}`;
};

export const handleFormat = (dateToFormat: Date, formatString: string) => {
  // determine the format
  const dayNameFormat = formatString.match(/([D])+/g);
  const dayNumberFormat = formatString.match(/([d])+/g);
  const monthFormat = formatString.match(/([m|M])+/g);
  const yearFormat = formatString.match(/([y|Y])+/g);

  const formatMap: Map<string, string> = new Map([]);

  if (dayNameFormat?.length) {
    dayNameFormat.forEach((format) => {
      formatMap.set(format, formatDay(dateToFormat, dayNameFormat[0]));
    });
  }

  if (dayNumberFormat?.length) {
    dayNumberFormat.forEach((format) => {
      formatMap.set(format, formatDay(dateToFormat, dayNumberFormat[0]));
    });
  }

  if (monthFormat?.length) {
    monthFormat.forEach((format) => {
      formatMap.set(format, formatMonth(dateToFormat, monthFormat[0]));
    });
  }

  if (yearFormat?.length) {
    yearFormat.forEach((format) => {
      formatMap.set(format, formatYear(dateToFormat, yearFormat[0]));
    });
  }

  const getMatchedValue = (matched: string) => {
    const returnValue = formatMap.get(matched);
    // long day, this probably needs to be revised
    return returnValue ?? '';
  };

  const formatMapKeysRegex = new RegExp([...formatMap.keys()].join('|'), 'gi');
  const formattedString = formatString.replace(formatMapKeysRegex, (matched) => getMatchedValue(matched));
  return formattedString;
};
