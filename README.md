# GEDate (Good Enough Date)

A library that provides helpful methods for working with dates. 


# Usage 

# Format Functions
These methods allow you to format a date in quite a few different ways. 

## Format string
The format (string) argument is optional, if you do not provide it, the returned string will be formatted like so, mm-dd-yyyy (ex. 12-31-2020). The following table lists the values that can be used in the format string:
|Value| Returns | Example|
|--|--|--|
|mm  | month number 1-12 | "12"|
|MM  | short month  |"Apr"|
|MMM | long month  |"April"|
|dd  | day number 1-31 | 31|
|DD | short day | "Mon"|
|DDD  | long day |"Monday"|
|yy  | short year | "21"|
|yyyy  | long year | "2021"|
|YY  | short year | "21"|
|YYYY  | long year | "2021"|

The format string is just that, a string. You may choose to pass in whatever string value you want, the special values denoted in the table above will be replaced with the formatted value.

Examples:
`DDD MMM dd, YYYY` would be formatted in to "Saturday October 31, 2021" (assuming that is the date/timestamp that I passed in to the format function).
`DD MM dd, YY` would be formatted in to "Sat Oct 31, 21" (assuming that is the date/timestamp that I passed in to the format function).

## formatUnixTimestamp
*Formats a Unix timestamp*  
Returns a string  
Arguments:  
| Name | Type |Description|Optional| Example|
|--|--|--|--|--|
| timestamp | number |a unix timestamp| no | 1635126143 |
| format | string |string as described in the "Format String" section of the docs| yes | "MMM dd YYYY" |

## formatDateString
*Formats a Unix timestamp*  
Returns a string  
Arguments:  
| Name | Type |Description|Optional| Example|
|--|--|--|--|--|
| dateString | string |A string value representing a date, specified in a format recognized by the [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) method.| no | 'December 31, 2020 06:55:00'|
| format | string |string as described in the "Format String" section of the docs| yes | "DDD MMM dd, YYYY" |

