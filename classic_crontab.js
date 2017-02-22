// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }

////////////////////////////////////////////////////////////////
function toInt(n) {
    return parseInt(n);
}

function jumpRange(maxNum, step) {
    let output = [];

    step = step || 1;
    step = (step < 1) ? 1 : step;

    for (let i = 0; i < maxNum; i += step) {
        output.push(i);
    }

    return output;
}

function numRange(minNum, maxNum) {
    let output = [];

    for (let i = minNum; i <= maxNum; ++i) {
        output.push(i);
    }

    return output;
}

function plusN(n) {
    return function(i) {
        return n + i;
    }
}

function upToN(n) {
    return function(i) {
        return i <= n;
    }
}

function joinListWithKey(key) {
    return function(d) {
        let dict = {};
        dict[d[0]] = true;

        for (let i in d[1]) {
            dict[d[1][i][1]] = true;
        }
        let output = {};
        output[key] = Object.keys(dict).map(toInt);
        return output;
    }
}
////////////////////////////////////////////////////////////////
function minute(d) {
    return parseInt((d[0] | "") + d[1]);
}

function minuteAll(d) {
    return {minutes: jumpRange(60)};
}

function minuteJump(d) {
    let step = parseInt(d[1]);

    return {minutes: jumpRange(60, step)};
}

function minuteRange(d, l, reject) {
    let minNum = d[0];
    let maxNum = d[2];

    if (maxNum <= minNum) {
        return reject;
    }

    return {minutes: numRange(minNum, maxNum)};
}

function minuteList(d) {
    return joinListWithKey('minutes')(d);
}
////////////////////////////////////////////////////////////////
function hour(d) {
    return parseInt((d[0][0] || "") + d[0][1]);
}

function hourAll(d) {
    return {hours: jumpRange(24)};
}

function hourJump(d) {
    let step = parseInt(d[1]);

    return {hours: jumpRange(24, step)};
}

function hourRange(d, l, reject) {
    let minNum = d[0];
    let maxNum = d[2];

    if (maxNum <= minNum) {
        return reject;
    }

    return {hours: numRange(minNum, maxNum)};
}

function hourList(d) {
    return joinListWithKey('hours')(d);
}
////////////////////////////////////////////////////////////////
function dayOfMonth(d) {
    return parseInt((d[0][0] || "") + d[0][1]);
}

function allDaysOfMonth(d) {
    return {daysOfMonth: jumpRange(31).map(plusN(1))};
}

function dayOfMonthJump(d) {
    let step = parseInt(d[1]);

    return {daysOfMonth: jumpRange(31, step).map(plusN(step)).filter(upToN(31))};
}

function dayOfMonthRange(d, l, reject) {
    let minNum = d[0];
    let maxNum = d[2];

    if (maxNum <= minNum) {
        return reject;
    }

    return {daysOfMonth: numRange(minNum, maxNum)};
}

function dayOfMonthList(d) {
    return joinListWithKey('daysOfMonth')(d);
}
////////////////////////////////////////////////////////////////
function monthOfYearNum(d) {
    return parseInt((d[0][0] || "") + d[0][1]);
}

function allMonthsOfYear(d) {
    return {monthsOfYear: jumpRange(12).map(plusN(1))};
}

function monthOfYearJump(d) {
    let step = parseInt(d[1]);

    return {monthsOfYear: jumpRange(12, step).map(plusN(step)).filter(upToN(12))};
}

function monthOfYearRange(d, l, reject) {
    let minNum = d[0];
    let maxNum = d[2];

    if (maxNum <= minNum) {
        return reject;
    }

    return {monthsOfYear: numRange(minNum, maxNum)};
}

function monthOfYearList(d) {
    return joinListWithKey('monthsOfYear')(d);
}
////////////////////////////////////////////////////////////////
function cronFunc(d) {
    return {
        cron: {
            minutes: d[0].minutes,
            hours: d[2].hours,
            daysOfMonth: d[4].daysOfMonth,
            monthsOfYear: d[6].monthsOfYear,
        }
    }
}
////////////////////////////////////////////////////////////////
var grammar = {
    ParserRules: [
    {"name": "statement", "symbols": ["minutes", "_", "hours", "_", "daysOfMonth", "_", "monthsOfYear"], "postprocess": cronFunc},
    {"name": "minutes", "symbols": [{"literal":"*"}], "postprocess": minuteAll},
    {"name": "minutes$string$1", "symbols": [{"literal":"*"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "minutes$subexpression$1", "symbols": [/[23456]/]},
    {"name": "minutes$subexpression$1$string$1", "symbols": [{"literal":"1"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "minutes$subexpression$1", "symbols": ["minutes$subexpression$1$string$1"]},
    {"name": "minutes$subexpression$1$string$2", "symbols": [{"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "minutes$subexpression$1", "symbols": ["minutes$subexpression$1$string$2"]},
    {"name": "minutes$subexpression$1$string$3", "symbols": [{"literal":"1"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "minutes$subexpression$1", "symbols": ["minutes$subexpression$1$string$3"]},
    {"name": "minutes$subexpression$1$string$4", "symbols": [{"literal":"2"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "minutes$subexpression$1", "symbols": ["minutes$subexpression$1$string$4"]},
    {"name": "minutes$subexpression$1$string$5", "symbols": [{"literal":"3"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "minutes$subexpression$1", "symbols": ["minutes$subexpression$1$string$5"]},
    {"name": "minutes", "symbols": ["minutes$string$1", "minutes$subexpression$1"], "postprocess": minuteJump},
    {"name": "minutes", "symbols": ["minute", {"literal":"-"}, "minute"], "postprocess": minuteRange},
    {"name": "minutes$ebnf$1", "symbols": []},
    {"name": "minutes$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "minute"]},
    {"name": "minutes$ebnf$1", "symbols": ["minutes$ebnf$1$subexpression$1", "minutes$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "minutes", "symbols": ["minute", "minutes$ebnf$1"], "postprocess": minuteList},
    {"name": "hours", "symbols": [{"literal":"*"}], "postprocess": hourAll},
    {"name": "hours$string$1", "symbols": [{"literal":"*"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hours$subexpression$1", "symbols": [/[23468]/]},
    {"name": "hours$subexpression$1$string$1", "symbols": [{"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hours$subexpression$1", "symbols": ["hours$subexpression$1$string$1"]},
    {"name": "hours", "symbols": ["hours$string$1", "hours$subexpression$1"], "postprocess": hourJump},
    {"name": "hours", "symbols": ["hour", {"literal":"-"}, "hour"], "postprocess": hourRange},
    {"name": "hours$ebnf$1", "symbols": []},
    {"name": "hours$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "hour"]},
    {"name": "hours$ebnf$1", "symbols": ["hours$ebnf$1$subexpression$1", "hours$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "hours", "symbols": ["hour", "hours$ebnf$1"], "postprocess": hourList},
    {"name": "daysOfMonth", "symbols": [{"literal":"*"}], "postprocess": allDaysOfMonth},
    {"name": "daysOfMonth$string$1", "symbols": [{"literal":"*"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "daysOfMonth$subexpression$1", "symbols": [/[2356]/]},
    {"name": "daysOfMonth$subexpression$1$string$1", "symbols": [{"literal":"1"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "daysOfMonth$subexpression$1", "symbols": ["daysOfMonth$subexpression$1$string$1"]},
    {"name": "daysOfMonth$subexpression$1$string$2", "symbols": [{"literal":"1"}, {"literal":"5"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "daysOfMonth$subexpression$1", "symbols": ["daysOfMonth$subexpression$1$string$2"]},
    {"name": "daysOfMonth", "symbols": ["daysOfMonth$string$1", "daysOfMonth$subexpression$1"], "postprocess": dayOfMonthJump},
    {"name": "daysOfMonth", "symbols": ["dayOfMonth", {"literal":"-"}, "dayOfMonth"], "postprocess": dayOfMonthRange},
    {"name": "daysOfMonth$ebnf$1", "symbols": []},
    {"name": "daysOfMonth$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "dayOfMonth"]},
    {"name": "daysOfMonth$ebnf$1", "symbols": ["daysOfMonth$ebnf$1$subexpression$1", "daysOfMonth$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "daysOfMonth", "symbols": ["dayOfMonth", "daysOfMonth$ebnf$1"], "postprocess": dayOfMonthList},
    {"name": "monthsOfYear", "symbols": [{"literal":"*"}], "postprocess": allMonthsOfYear},
    {"name": "monthsOfYear$string$1", "symbols": [{"literal":"*"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "monthsOfYear", "symbols": ["monthsOfYear$string$1", /[2346]/], "postprocess": monthOfYearJump},
    {"name": "monthsOfYear", "symbols": ["monthOfYearNum", {"literal":"-"}, "monthOfYearNum"], "postprocess": monthOfYearRange},
    {"name": "monthsOfYear$ebnf$1", "symbols": []},
    {"name": "monthsOfYear$ebnf$1$subexpression$1", "symbols": [{"literal":","}, "monthOfYearNum"]},
    {"name": "monthsOfYear$ebnf$1", "symbols": ["monthsOfYear$ebnf$1$subexpression$1", "monthsOfYear$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "monthsOfYear", "symbols": ["monthOfYearNum", "monthsOfYear$ebnf$1"], "postprocess": monthOfYearList},
    {"name": "monthsOfYear", "symbols": ["monthOfYearLit", {"literal":"-"}, "monthOfYearLit"], "postprocess": monthOfYearRange},
    {"name": "monthsOfYear$ebnf$2", "symbols": []},
    {"name": "monthsOfYear$ebnf$2$subexpression$1", "symbols": [{"literal":","}, "monthOfYearLit"]},
    {"name": "monthsOfYear$ebnf$2", "symbols": ["monthsOfYear$ebnf$2$subexpression$1", "monthsOfYear$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "monthsOfYear", "symbols": ["monthOfYearLit", "monthsOfYear$ebnf$2"], "postprocess": monthOfYearList},
    {"name": "minute$ebnf$1", "symbols": [/[0-5]/], "postprocess": id},
    {"name": "minute$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "minute", "symbols": ["minute$ebnf$1", /[0-9]/], "postprocess": minute},
    {"name": "hour$subexpression$1$ebnf$1", "symbols": [/[01]/], "postprocess": id},
    {"name": "hour$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "hour$subexpression$1", "symbols": ["hour$subexpression$1$ebnf$1", /[0-9]/]},
    {"name": "hour$subexpression$1", "symbols": [{"literal":"2"}, /[0-3]/]},
    {"name": "hour", "symbols": ["hour$subexpression$1"], "postprocess": hour},
    {"name": "dayOfMonth$subexpression$1$ebnf$1", "symbols": [{"literal":"0"}], "postprocess": id},
    {"name": "dayOfMonth$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "dayOfMonth$subexpression$1", "symbols": ["dayOfMonth$subexpression$1$ebnf$1", /[1-9]/]},
    {"name": "dayOfMonth$subexpression$1", "symbols": [/[12]/, /[0-9]/]},
    {"name": "dayOfMonth$subexpression$1", "symbols": [{"literal":"3"}, /[01]/]},
    {"name": "dayOfMonth", "symbols": ["dayOfMonth$subexpression$1"], "postprocess": dayOfMonth},
    {"name": "monthOfYearNum$subexpression$1$ebnf$1", "symbols": [{"literal":"0"}], "postprocess": id},
    {"name": "monthOfYearNum$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "monthOfYearNum$subexpression$1", "symbols": ["monthOfYearNum$subexpression$1$ebnf$1", /[1-9]/]},
    {"name": "monthOfYearNum$subexpression$1", "symbols": [{"literal":"1"}, /[0-2]/]},
    {"name": "monthOfYearNum", "symbols": ["monthOfYearNum$subexpression$1"], "postprocess": monthOfYearNum},
    {"name": "monthOfYearLit", "symbols": [/[jJ]/, /[aA]/, /[nN]/], "postprocess": function(d) { return 1; }},
    {"name": "monthOfYearLit", "symbols": [/[fF]/, /[eE]/, /[bB]/], "postprocess": function(d) { return 2; }},
    {"name": "monthOfYearLit", "symbols": [/[mM]/, /[aA]/, /[rR]/], "postprocess": function(d) { return 3; }},
    {"name": "monthOfYearLit", "symbols": [/[aA]/, /[pP]/, /[rR]/], "postprocess": function(d) { return 4; }},
    {"name": "monthOfYearLit", "symbols": [/[mM]/, /[aA]/, /[yY]/], "postprocess": function(d) { return 5; }},
    {"name": "monthOfYearLit", "symbols": [/[jJ]/, /[uU]/, /[nN]/], "postprocess": function(d) { return 6; }},
    {"name": "monthOfYearLit", "symbols": [/[jJ]/, /[uU]/, /[lL]/], "postprocess": function(d) { return 7; }},
    {"name": "monthOfYearLit", "symbols": [/[aA]/, /[uU]/, /[gG]/], "postprocess": function(d) { return 8; }},
    {"name": "monthOfYearLit", "symbols": [/[sS]/, /[eE]/, /[pP]/], "postprocess": function(d) { return 9; }},
    {"name": "monthOfYearLit", "symbols": [/[oO]/, /[cC]/, /[tT]/], "postprocess": function(d) { return 10; }},
    {"name": "monthOfYearLit", "symbols": [/[nN]/, /[oO]/, /[vV]/], "postprocess": function(d) { return 11; }},
    {"name": "monthOfYearLit", "symbols": [/[dD]/, /[eE]/, /[cC]/], "postprocess": function(d) { return 12; }},
    {"name": "_$ebnf$1", "symbols": [/[ \t]/]},
    {"name": "_$ebnf$1", "symbols": [/[ \t]/, "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) { return null; }}
]
  , ParserStart: "statement"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
