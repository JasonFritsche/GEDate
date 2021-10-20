"use strict";
exports.__esModule = true;
exports.formatMonth = void 0;
var months_1 = require("../constants/months");
var formatMonth = function (dateToFormat, monthFormat) {
    // MM is short month "Apr"
    // MMM is long month example "April"
    // mm is month number 1-12
    // format month and return as string
    var splitMonthFormat = monthFormat.split('');
    if (splitMonthFormat.length === 2) {
        // should either be mm or MM
        if (splitMonthFormat.every(function (letter) { return letter === 'm'; })) {
            // we have 2 lowercase m's
            return dateToFormat.getMonth().toString();
        }
        else if (splitMonthFormat.every(function (letter) { return letter === 'M'; })) {
            // we have 2 uppercase M's
            var month = dateToFormat.getMonth();
            return months_1.shortMonths[month];
        }
    }
    else if (splitMonthFormat.length === 3) {
        if (splitMonthFormat.every(function (letter) { return letter === 'M'; })) {
            // we have 3 uppercase M's
            var month = dateToFormat.getMonth();
            return months_1.longMonths[month];
        }
        else {
            console.log('error');
        }
    }
    else {
        // unsupported format type, return default mm format
        return dateToFormat.getMonth().toString();
    }
};
exports.formatMonth = formatMonth;
