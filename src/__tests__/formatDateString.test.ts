import { formatDateString } from '../index';

test('format unix timestamp default format', () => {
  expect(formatDateString('October 23, 2021 23:15:30 GMT+11:00')).toBe('10-23-2021');
});

test('format unix timestamp, DDD MMM dd, YYYY format', () => {
  expect(formatDateString('October 23, 2021 23:15:30 GMT+11:00', 'DDD MMM dd, YYYY')).toBe('Saturday October 23, 2021');
});

test('format unix timestamp, DD MM dd, yy format', () => {
  expect(formatDateString('October 23, 2021 23:15:30 GMT+11:00', 'DD MM dd, yy')).toBe('Sat Oct 23, 21');
});

test('format unix timestamp, mm/dd/yyyy format', () => {
  expect(formatDateString('October 23, 2021 23:15:30 GMT+11:00', 'mm/dd/yyyy')).toBe('10/23/2021');
});
