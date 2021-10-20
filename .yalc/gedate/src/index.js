"use strict";
exports.__esModule = true;
exports.formatDateString = exports.formatUnixTimestamp = void 0;
var format_1 = require("./formatters/format");
// Format Date From ISO String
var formatUnixTimestamp = function (timestamp, format, locale) {
    var dateFromTimeStamp = new Date(timestamp * 1000);
    var formattedDate = '';
    // if format and locale are not specified, return default formatted date
    if (!format && !locale) {
        formattedDate = (0, format_1.defaultFormat)(dateFromTimeStamp);
    }
    else if (format) {
        formattedDate = (0, format_1.handleFormat)(dateFromTimeStamp, format);
    }
    console.log(formattedDate);
    return formattedDate;
};
exports.formatUnixTimestamp = formatUnixTimestamp;
// Format Date string
var formatDateString = function (dateString, format, locale) {
    /**
     * default format is mm-dd-yyyy ex. 10-18-2021
     * TODO: Implement Locale
     */
    var formattedDate = '';
    // if format is not specified or if formay is mm-dd-yyyy, send back default
    var dateFromDateString = new Date(dateString);
    // if format and locale are not specified, return default formatted date
    if (!format && !locale) {
        formattedDate = (0, format_1.defaultFormat)(dateFromDateString);
    }
    else if (format) {
        formattedDate = (0, format_1.handleFormat)(dateFromDateString, format);
    }
    console.log(formattedDate);
    return formattedDate;
};
exports.formatDateString = formatDateString;
(0, exports.formatDateString)('Oct 20, 2021 20:17:40 GMT+00:00', 'DD MMM ddd, YYYY');
(0, exports.formatUnixTimestamp)(1634771320, 'DDD MMM ddd, YYYY');
