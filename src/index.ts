import { defaultFormat, handleFormat } from './formatters/format';

// Format Date From ISO String
export const formatUnixTimestamp = (timestamp: number, format?: string, locale?: string) => {
  const dateFromTimeStamp = new Date(timestamp * 1000);
  let formattedDate = '';
  // if format and locale are not specified, return default formatted date
  if (!format && !locale) {
    formattedDate = defaultFormat(dateFromTimeStamp);
  } else if (format) {
    formattedDate = handleFormat(dateFromTimeStamp, format);
  }
  return formattedDate;
};

// Format Date string
export const formatDateString = (dateString: string, format?: string, locale?: string) => {
  /**
   * default format is mm-dd-yyyy ex. 10-18-2021
   * TODO: Implement Locale
   */
  let formattedDate: string = '';

  // if format is not specified or if formay is mm-dd-yyyy, send back default
  const dateFromDateString = new Date(dateString);
  // if format and locale are not specified, return default formatted date
  if (!format && !locale) {
    formattedDate = defaultFormat(dateFromDateString);
  } else if (format) {
    formattedDate = handleFormat(dateFromDateString, format);
  }
  return formattedDate;
};
