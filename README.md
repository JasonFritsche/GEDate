# GEDate (Good Enough Date)

A library that provides helpful methods for working with dates. Open source, please feel free to contribute. 

# Contributing
*First time contributors and developers of all levels are welcome!*
- All issues are up for grabs. 
- Fork the repo, then clone. Create a new branch for any issue you're working on. Make a PR.
- Everything is up for grabs, even the readme file, however, make sure your contribution is meaningful. For example, if you're going to update the readme, please make sure the update is useful. Please open a new issue if you see something that you want to add/update/fix that doesn't already have an open issue.

## Code of Conduct
Please adhere to the [OpenJS Contributor Covenant Code of Conduct](https://github.com/openjs-foundation/cross-project-council/blob/master/CODE_OF_CONDUCT.md)


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

