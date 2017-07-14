(function () {

    function endOfWord(string, i) {
        while(!string[i].match(/[\s\.\?\.]/)) {
            i++;
        }
        return i;
    }

    function endOfSentence(string, i) {
        while(!string[i].match(/[\!\?\.]/))  {
            i++;
        }
        return i;
    }


    function lineBreak(string, separationStart, separationEnd, element) {
        var start = string.substring(0, separationStart);
        var end = string.substring(separationEnd);
        string = start.trim() + element + end;
        return string;
    }

    function endOfText(string, rows, space, length) {
        if (space + length > rows * length) {
            space = endOfWord(string,space + length);
            string = string.split('',space).concat('...').join('');
        }
        return string;
    }

    function onWord(string, length, rows) {
        var element = '\n';
        var space = 0;
        var i = 1;
        while (space + length < string.length && i < rows) {
            space = endOfWord(string, space + length);
            string = lineBreak(string, space, space + 1, element);
            i++;
        }
        return endOfText(string, rows, space, length);
    }

    // REVIEW: length лишнее, ну или использовать его надо
    function onSentence(string, length, rows) {
        var element = '\n';
        var space = 0;
        var i = 1;
        while (space + 2 < string.length && i < rows) {
            space = endOfSentence(string, space + 1);
            string = lineBreak(string, space + 1, space + 1, element);
            i++;
        }
        return string;
    } 

    function onSymbol(string, length, rows) {
        var space = 0;
        var i = 1;
        while (length * i < string.length && i < rows) {
            var element = '\n';
            if (!!string[length * i].match(/[a-zA-Zа-я]/)) {
                element='-\n';
                string = lineBreak(string, length * i, length * i, element);
            } else if (string[length * i].match(/\s/)) {
                string = lineBreak(string, length * i, length * i + 1, element);
            } else if (string[length * i].match(/[[\!\?\.]/)) {
                string = lineBreak(string, length * i + 1, length * i, element);
            }
            i++;
        }
        if (string.length > rows * length) {
                    space = endOfWord(string, length*rows);
                    string = string.split('',space).concat('...').join('');
        }
        return string;
    }

    function TextFormatter(string, type, length=60, rows) {
        if (!rows) {
            rows = Math.ceil(string.length / length);
        }
        switch(type) {
            case 'onWord': { return onWord(string, length, rows)};
            case 'onSymbol': { return onSymbol(string, length, rows)};
            case 'onSentence': { return onSentence(string, length, rows)};
            case 'none': { return string};
            
        }
    }
    window.TextFormatter = TextFormatter;
})();