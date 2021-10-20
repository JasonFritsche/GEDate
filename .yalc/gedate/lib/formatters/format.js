"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleFormat = exports.defaultFormat = void 0;
const dayFormatter_1 = require("./dayFormatter");
const monthFormatter_1 = require("./monthFormatter");
const yearFormatter_1 = require("./yearFormatter");
// default format if no format is provided or if format is invalid
const defaultFormat = (dateToFormat) => {
    const day = dateToFormat.getUTCDate();
    const month = dateToFormat.getUTCMonth();
    const year = dateToFormat.getUTCFullYear();
    return `${month}-${day}-${year}`;
};
exports.defaultFormat = defaultFormat;
const handleFormat = (dateToFormat, formatString) => {
    // determine the format
    const dayNameFormat = formatString.match(/([D])+/g);
    const dayNumberFormat = formatString.match(/([d])+/g);
    const monthFormat = formatString.match(/([m|M])+/g);
    const yearFormat = formatString.match(/([y|Y])+/g);
    // put it all together, if any errors return default format
    const mapObj = {
        DD: (dayNameFormat === null || dayNameFormat === void 0 ? void 0 : dayNameFormat.length) ? (0, dayFormatter_1.formatDay)(dateToFormat, dayNameFormat[0]) : '',
        DDD: (dayNameFormat === null || dayNameFormat === void 0 ? void 0 : dayNameFormat.length) ? (0, dayFormatter_1.formatDay)(dateToFormat, dayNameFormat[0]) : '',
        ddd: (dayNumberFormat === null || dayNumberFormat === void 0 ? void 0 : dayNumberFormat.length) ? (0, dayFormatter_1.formatDay)(dateToFormat, dayNumberFormat[0]) : '',
        mmm: (monthFormat === null || monthFormat === void 0 ? void 0 : monthFormat.length) ? (0, monthFormatter_1.formatMonth)(dateToFormat, monthFormat[0]) : '',
        MMM: (monthFormat === null || monthFormat === void 0 ? void 0 : monthFormat.length) ? (0, monthFormatter_1.formatMonth)(dateToFormat, monthFormat[0]) : '',
        MM: (monthFormat === null || monthFormat === void 0 ? void 0 : monthFormat.length) ? (0, monthFormatter_1.formatMonth)(dateToFormat, monthFormat[0]) : '',
        YY: (yearFormat === null || yearFormat === void 0 ? void 0 : yearFormat.length) ? (0, yearFormatter_1.formatYear)(dateToFormat, yearFormat[0]) : '',
        yy: (yearFormat === null || yearFormat === void 0 ? void 0 : yearFormat.length) ? (0, yearFormatter_1.formatYear)(dateToFormat, yearFormat[0]) : '',
        YYYY: (yearFormat === null || yearFormat === void 0 ? void 0 : yearFormat.length) ? (0, yearFormatter_1.formatYear)(dateToFormat, yearFormat[0]) : '',
        yyyy: (yearFormat === null || yearFormat === void 0 ? void 0 : yearFormat.length) ? (0, yearFormatter_1.formatYear)(dateToFormat, yearFormat[0]) : '',
    };
    const formattedString = formatString.replace(/\b(?:dd|DDD|ddd|mmm|MMM|MM|YY|yy|YYYY|yyyy)\b/gi, (matched) => mapObj[matched]);
    return formattedString;
};
exports.handleFormat = handleFormat;
