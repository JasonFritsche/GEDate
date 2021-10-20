"use strict";
exports.__esModule = true;
exports.handleFormat = exports.defaultFormat = void 0;
var dayFormatter_1 = require("./dayFormatter");
var monthFormatter_1 = require("./monthFormatter");
var yearFormatter_1 = require("./yearFormatter");
// default format if no format is provided or if format is invalid
var defaultFormat = function (dateToFormat) {
    var day = dateToFormat.getUTCDate();
    var month = dateToFormat.getUTCMonth();
    var year = dateToFormat.getUTCFullYear();
    return month + "-" + day + "-" + year;
};
exports.defaultFormat = defaultFormat;
var handleFormat = function (dateToFormat, formatString) {
    // determine the format
    var dayNameFormat = formatString.match(/([D])+/g);
    var dayNumberFormat = formatString.match(/([d])+/g);
    var monthFormat = formatString.match(/([m|M])+/g);
    var yearFormat = formatString.match(/([y|Y])+/g);
    // put it all together, if any errors return default format
    var mapObj = {
        DD: (dayNameFormat === null || dayNameFormat === void 0 ? void 0 : dayNameFormat.length) ? (0, dayFormatter_1.formatDay)(dateToFormat, dayNameFormat[0]) : '',
        DDD: (dayNameFormat === null || dayNameFormat === void 0 ? void 0 : dayNameFormat.length) ? (0, dayFormatter_1.formatDay)(dateToFormat, dayNameFormat[0]) : '',
        ddd: (dayNumberFormat === null || dayNumberFormat === void 0 ? void 0 : dayNumberFormat.length) ? (0, dayFormatter_1.formatDay)(dateToFormat, dayNumberFormat[0]) : '',
        mmm: (monthFormat === null || monthFormat === void 0 ? void 0 : monthFormat.length) ? (0, monthFormatter_1.formatMonth)(dateToFormat, monthFormat[0]) : '',
        MMM: (monthFormat === null || monthFormat === void 0 ? void 0 : monthFormat.length) ? (0, monthFormatter_1.formatMonth)(dateToFormat, monthFormat[0]) : '',
        MM: (monthFormat === null || monthFormat === void 0 ? void 0 : monthFormat.length) ? (0, monthFormatter_1.formatMonth)(dateToFormat, monthFormat[0]) : '',
        YY: (yearFormat === null || yearFormat === void 0 ? void 0 : yearFormat.length) ? (0, yearFormatter_1.formatYear)(dateToFormat, yearFormat[0]) : '',
        yy: (yearFormat === null || yearFormat === void 0 ? void 0 : yearFormat.length) ? (0, yearFormatter_1.formatYear)(dateToFormat, yearFormat[0]) : '',
        YYYY: (yearFormat === null || yearFormat === void 0 ? void 0 : yearFormat.length) ? (0, yearFormatter_1.formatYear)(dateToFormat, yearFormat[0]) : '',
        yyyy: (yearFormat === null || yearFormat === void 0 ? void 0 : yearFormat.length) ? (0, yearFormatter_1.formatYear)(dateToFormat, yearFormat[0]) : ''
    };
    var formattedString = formatString.replace(/\b(?:dd|DDD|ddd|mmm|MMM|MM|YY|yy|YYYY|yyyy)\b/gi, function (matched) { return mapObj[matched]; });
    return formattedString;
};
exports.handleFormat = handleFormat;
