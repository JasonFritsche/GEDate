"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDateString = exports.formatUnixTimestamp = void 0;
var months_1 = require("./constants/months");
var days_1 = require("./constants/days");
// Format Date From ISO String
var formatUnixTimestamp = function (timestamp) {
    var dateFromTimeStamp = new Date(timestamp * 1000);
    var month = months_1.months[dateFromTimeStamp.getUTCMonth()];
    var day = days_1.days[dateFromTimeStamp.getUTCDay()];
    var date = dateFromTimeStamp.getUTCDate();
    var year = dateFromTimeStamp.getFullYear();
    return day + ", " + month + " " + date + ", " + year;
};
exports.formatUnixTimestamp = formatUnixTimestamp;
// Format Date string
var formatDateString = function (dateString, format, locale) {
    var dateFromDateString = new Date(dateString);
    var month = months_1.months[dateFromDateString.getUTCMonth()];
    var day = days_1.days[dateFromDateString.getUTCDay()];
    var date = dateFromDateString.getUTCDate();
    var year = dateFromDateString.getFullYear();
    return day + ", " + month + " " + date + ", " + year;
};
exports.formatDateString = formatDateString;
