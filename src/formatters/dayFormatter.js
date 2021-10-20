"use strict";
exports.__esModule = true;
exports.formatDay = void 0;
var days_1 = require("../constants/days");
// format day and return as string
var formatDay = function (dateToFormat, dayFormat) {
    var returnValue = dateToFormat.getDate().toString();
    // dayFormat string can be either dd, DD, or DDD otherwise it is invalid. if invalid, return as dd.
    // DD is short day. example "Mon". DDD is long day. example "Monday"
    var splitDayFormat = dayFormat.split('');
    if (splitDayFormat.length === 2) {
        // should either be dd or DD
        if (splitDayFormat.every(function (letter) { return letter === 'd'; })) {
            // we have 2 lowercase d's
            returnValue = dateToFormat.getDate().toString();
        }
        else if (splitDayFormat.every(function (letter) { return letter === 'D'; })) {
            // we have 2 uppercase D's
            var day = dateToFormat.getDay();
            returnValue = days_1.shortDays[day];
        }
    }
    else if (splitDayFormat.length === 3) {
        if (splitDayFormat.every(function (letter) { return letter === 'D'; })) {
            // we have 3 uppercase D's
            var day = dateToFormat.getDay();
            returnValue = days_1.longDays[day];
        }
        else {
            returnValue = dateToFormat.getDate().toString();
        }
    }
    else {
        // unsupported format type, return default dd format
        returnValue = dateToFormat.getDate().toString();
    }
    return returnValue;
};
exports.formatDay = formatDay;
