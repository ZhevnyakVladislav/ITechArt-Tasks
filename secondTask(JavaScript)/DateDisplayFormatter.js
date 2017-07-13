var  DateDisplayFormatter = (function() {

    function parseDate(string) {
        var day = string.substring(0,2);
        var month = string.substring(2,4);
        var year = string.substring(4);
        return { day: day, month: month, year: year};
    }

    function parseDateByReg(string,regular) {
        var year = string.substr(regular.indexOf('YYYY'),4);
        var month = string.substr(regular.indexOf('MM'),2);
        var day = string.substr(regular.indexOf('DD'),2);
        return { day: day, month: month, year: year};
    }

    function getStringMonth(date) {
        var tmp = new Date(date.year, date.month, date.day);
        return tmp.toDateString().split(' ')[1];
    }

    function createDate(date) {
        return date.day.toString().concat('-', date.month,'-', date.year);
    }

    function createDateByTemplate(date, template) {
        return template.replace(/YYYY/, date.year)
            .replace(/DD/, date.day)
            .replace(/MM/, date.month);

    }
    return {
        toNumber: function(value) {
            if (typeof value == 'string') {
                return createDate(parseDate(value));
            } else {
                var date = new Date(value);
                date = {day: date.getDay(), month:date.getMonth(), year: date.getFullYear()};
                date.month = getStringMonth(date);
                return createDate(date);
            }
        },

        toString: function(string) {
            var date = parseDate(string);
            date.month = getStringMonth(date);
            return createDate(date);
        },

        regToNumber: function(string, regular) {
            return createDate(parseDateByReg(string,regular));
        },

        regToString: function(string, regular) {
            var date = parseDateByReg(string,regular);
            date.month = getStringMonth(date);
            return createDate(date);
        },

        toNumberByTemplate: function(string,template, regular) {
            if(regular) {
                var date = parseDateByReg(string,regular);
            } else {
                date = parseDate(string);
            }
            return createDateByTemplate(date, template);
        },
        
        toStringByTemplate: function(string,template, regular) {
            if(regular) {
                var date = parseDateByReg(string,regular);
            } else {
                date = parseDate(string);
            }
            date.month = getStringMonth(date);
            return createDateByTemplate(date, template);
        },
    }
})();