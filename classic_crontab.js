// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }


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
    let mins = {};
    mins[d[0]] = true;

    for (let i in d[1]) {
        mins[d[1][i][1]] = true;
    }
    return {minutes: Object.keys(mins).map(toInt)};
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
    let hrs = {};
    hrs[d[0]] = true;

    for (let i in d[1]) {
        hrs[d[1][i][1]] = true;
    }
    return {hours: Object.keys(hrs).map(toInt)};
}
////////////////////////////////////////////////////////////////
function cronFunc(d) {
    return {
        cron: {
            minutes: d[0].minutes,
            hours: d[2].hours
        }
    }
}

var grammar = {
    ParserRules: [
    {"name": "statement", "symbols": ["minutes", "_", "hours"], "postprocess": cronFunc},
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
    {"name": "minute$ebnf$1", "symbols": [/[0-5]/], "postprocess": id},
    {"name": "minute$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "minute", "symbols": ["minute$ebnf$1", /[0-9]/], "postprocess": minute},
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
    {"name": "hour$subexpression$1$ebnf$1", "symbols": [/[01]/], "postprocess": id},
    {"name": "hour$subexpression$1$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "hour$subexpression$1", "symbols": ["hour$subexpression$1$ebnf$1", /[0-9]/]},
    {"name": "hour$subexpression$1", "symbols": [{"literal":"2"}, /[0-3]/]},
    {"name": "hour", "symbols": ["hour$subexpression$1"], "postprocess": hour},
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
