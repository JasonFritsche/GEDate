import { months } from './constants/months';
import { days } from './constants/days';

// Format Date From ISO String
export const formatUnixTimestamp = (timestamp: number) => {
  const dateFromTimeStamp = new Date(timestamp * 1000);
  const month = months[dateFromTimeStamp.getUTCMonth()];
  const day = days[dateFromTimeStamp.getUTCDay()];
  const date = dateFromTimeStamp.getUTCDate();
  const year = dateFromTimeStamp.getFullYear();

  return `${day}, ${month} ${date}, ${year}`;
};

// Format Date string
export const formatDateString = (dateString: string, format?: any, locale?: string) => {
  const dateFromDateString = new Date(dateString);
  const month = months[dateFromDateString.getUTCMonth()];
  const day = days[dateFromDateString.getUTCDay()];
  const date = dateFromDateString.getUTCDate();
  const year = dateFromDateString.getFullYear();

  return `${day}, ${month} ${date}, ${year}`;
};
