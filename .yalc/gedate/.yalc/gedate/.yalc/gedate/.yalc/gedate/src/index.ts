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
