"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatMonth = void 0;
const months_1 = require("../constants/months");
const formatMonth = (dateToFormat, monthFormat) => {
    // MM is short month "Apr"
    // MMM is long month example "April"
    // mm is month number 1-12
    // format month and return as string
    const splitMonthFormat = monthFormat.split('');
    if (splitMonthFormat.length === 2) {
        // should either be mm or MM
        if (splitMonthFormat.every((letter) => letter === 'm')) {
            // we have 2 lowercase m's
            return dateToFormat.getMonth().toString();
        }
        else if (splitMonthFormat.every((letter) => letter === 'M')) {
            // we have 2 uppercase M's
            const month = dateToFormat.getMonth();
            return months_1.shortMonths[month];
        }
    }
    else if (splitMonthFormat.length === 3) {
        if (splitMonthFormat.every((letter) => letter === 'M')) {
            // we have 3 uppercase M's
            const month = dateToFormat.getMonth();
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
