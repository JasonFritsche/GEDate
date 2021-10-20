"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateString = exports.formatUnixTimestamp = void 0;
const format_1 = require("./formatters/format");
// Format Date From ISO String
const formatUnixTimestamp = (timestamp, format, locale) => {
    const dateFromTimeStamp = new Date(timestamp * 1000);
    let formattedDate = '';
    // if format and locale are not specified, return default formatted date
    if (!format && !locale) {
        formattedDate = (0, format_1.defaultFormat)(dateFromTimeStamp);
    }
    else if (format) {
        formattedDate = (0, format_1.handleFormat)(dateFromTimeStamp, format);
    }
    return formattedDate;
};
exports.formatUnixTimestamp = formatUnixTimestamp;
// Format Date string
const formatDateString = (dateString, format, locale) => {
    /**
     * default format is mm-dd-yyyy ex. 10-18-2021
     * TODO: Implement Locale
     */
    let formattedDate = '';
    // if format is not specified or if formay is mm-dd-yyyy, send back default
    const dateFromDateString = new Date(dateString);
    // if format and locale are not specified, return default formatted date
    if (!format && !locale) {
        formattedDate = (0, format_1.defaultFormat)(dateFromDateString);
    }
    else if (format) {
        formattedDate = (0, format_1.handleFormat)(dateFromDateString, format);
    }
    return formattedDate;
};
exports.formatDateString = formatDateString;
// formatDateString('Oct 20, 2021 20:17:40 GMT+00:00', 'DD MMM ddd, YYYY');
// formatUnixTimestamp(1634771320, 'DDD MMM ddd, YYYY');
