import { shortDays, longDays } from '../constants/days';

// format day and return as string
export const formatDay = (dateToFormat: Date, dayFormat: string): string => {
  let returnValue: string = dateToFormat.getDate().toString();
  // dayFormat string can be either dd, DD, or DDD otherwise it is invalid. if invalid, return as dd.
  // DD is short day. example "Mon". DDD is long day. example "Monday"
  const splitDayFormat = dayFormat.split('');
  if (splitDayFormat.length === 2) {
    // should either be dd or DD
    if (splitDayFormat.every((letter) => letter === 'd')) {
      // we have 2 lowercase d's
      returnValue = dateToFormat.getDate().toString();
    } else if (splitDayFormat.every((letter) => letter === 'D')) {
      // we have 2 uppercase D's
      const day = dateToFormat.getDay();
      returnValue = shortDays[day];
    }
  } else if (splitDayFormat.length === 3) {
    if (splitDayFormat.every((letter) => letter === 'D')) {
      // we have 3 uppercase D's
      const day = dateToFormat.getDay();
      returnValue = longDays[day];
    } else {
      returnValue = dateToFormat.getDate().toString();
    }
  } else {
    // unsupported format type, return default dd format
    returnValue = dateToFormat.getDate().toString();
  }
  return returnValue;
};
