(function () {

    function endOfWord(string, i) {
        while(string[i] != (' ' || '!' || '.' || '?')) {
            i++;
        }
        return i;
    }

    function endOfSentence(string, i) {
        while(string[i] != '.')  {
            i++;
        }
        return i;
    }

    function endOfText(string, length) { 
        if (length < string.length) {
            return true;
        }

    }

    function lineBreak(string, separationStart, separationEnd, element) {
        var start = string.substring(0, separationStart);
        var end = string.substring(separationEnd);
        string = start + element + end;
        return string;
    }

    function onWord(string, length, rows) {
        var element = '\n';
        var space = 0;
        var i = 1;
        while (space + length < string.length) {
            space = endOfWord(string, space + length);
            string = lineBreak(string, space, space + 1, element);
        }
        return string;
    }

    function onSentence(string, length, rows) {
        var element = '\n';
        var space = 0;
        while (space + 2 < string.length) {
            space = endOfSentence(string, space + 1);
            string = lineBreak(string, space + 1, space + 1, element);
        }
        return string;
    } 

    function onSymbol(string, length, rows) {
        var space = 0;
        var i = 1;
        while (length * i < string.length) {
            var element = '\n';
            if (!!string[length * i].match(/[a-zA-Zа-я]/)) {
                element='-\n';
            } else if (string[length * i].match(/\s/)) {
                element='---\n'
            }
            var start = string.substring(0, length * i);
            var end = string.substring(length * i);
            string = start + element + end;
            i++;
        }
        return string;
    }

    function TextFormatter(string, type, length=60, rows=999) {
        switch(type) {
            case 'onWord': { return onWord(string, length, rows)};
            case 'onSymbol': { return onSymbol(string, length, rows)};
            case 'onSentence': { return onSentence(string, length, rows)};
        }
    }

    window.TextFormatter = TextFormatter;
})();