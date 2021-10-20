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

  // put it all together, if any errors return default format
  const mapObj: any = {
    DD: dayNameFormat?.length ? formatDay(dateToFormat, dayNameFormat[0]) : '',
    DDD: dayNameFormat?.length ? formatDay(dateToFormat, dayNameFormat[0]) : '',
    ddd: dayNumberFormat?.length ? formatDay(dateToFormat, dayNumberFormat[0]) : '',
    mmm: monthFormat?.length ? formatMonth(dateToFormat, monthFormat[0]) : '',
    MMM: monthFormat?.length ? formatMonth(dateToFormat, monthFormat[0]) : '',
    MM: monthFormat?.length ? formatMonth(dateToFormat, monthFormat[0]) : '',
    YY: yearFormat?.length ? formatYear(dateToFormat, yearFormat[0]) : '',
    yy: yearFormat?.length ? formatYear(dateToFormat, yearFormat[0]) : '',
    YYYY: yearFormat?.length ? formatYear(dateToFormat, yearFormat[0]) : '',
    yyyy: yearFormat?.length ? formatYear(dateToFormat, yearFormat[0]) : '',
  };
  const formattedString = formatString.replace(
    /\b(?:dd|DDD|ddd|mmm|MMM|MM|YY|yy|YYYY|yyyy)\b/gi,
    (matched) => mapObj[matched],
  );
  return formattedString;
};
