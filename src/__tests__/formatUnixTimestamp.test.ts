import { formatUnixTimestamp } from '../index';

test('format unix timestamp default format', () => {
  expect(formatUnixTimestamp(1635013459)).toBe('10-23-2021');
});

test('format unix timestamp, DDD MMM dd, YYYY format', () => {
  expect(formatUnixTimestamp(1635013459, 'DDD MMM dd, YYYY')).toBe('Saturday October 23, 2021');
});

test('format unix timestamp, DD MM dd, yy format', () => {
  expect(formatUnixTimestamp(1635013459, 'DD MM dd, yy')).toBe('Sat Oct 23, 21');
});

test('format unix timestamp, mm/dd/yyyy format', () => {
  expect(formatUnixTimestamp(1635013459, 'mm/dd/yyyy')).toBe('10/23/2021');
});
