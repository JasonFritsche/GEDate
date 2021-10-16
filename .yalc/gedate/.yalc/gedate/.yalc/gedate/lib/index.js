"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatUnixTimestamp = void 0;
var months_1 = require("./constants/months");
var days_1 = require("./constants/days");
// Format Date From ISO String
var formatUnixTimestamp = function (timestamp) {
    var dateFromTimeStamp = new Date(timestamp * 1000);
    var month = months_1.months[dateFromTimeStamp.getUTCMonth()];
    var day = days_1.days[dateFromTimeStamp.getUTCDay()];
    var date = dateFromTimeStamp.getUTCDate();
    return day + ", " + month + " " + date;
};
exports.formatUnixTimestamp = formatUnixTimestamp;
