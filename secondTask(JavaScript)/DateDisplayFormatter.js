var  DateDisplayFormatter = (function() {

    function parseDate(string) {
        var day = string.substring(0,2);
        var month = string.substring(2,4);
        var year = string.substring(4);
        return { day: day, month: month, year: year};
    }

    function createDate(date) {
        return date.day.concat('-', date.month,'-', date.year);
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

    return {
        toNumber: function(string) {
            return createDate(parseDate(string));
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
        }
    }
})();