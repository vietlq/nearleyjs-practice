// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }


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
function minuteAll(d) {
    return {minutes: jumpRange(60)};
}

function minuteJump(d) {
    let step = parseInt(d[1]);

    return {minutes: jumpRange(60, step)};
}

function minuteRange(d, l, reject) {
    let minNum = parseInt((d[0] | "") + d[1]);
    let maxNum = parseInt((d[3] | "") + d[4]);

    if (maxNum <= minNum) {
        return reject;
    }

    return {minutes: numRange(minNum, maxNum)};
}
////////////////////////////////////////////////////////////////
function hourAll(d) {
    return {hours: jumpRange(24)};
}

function hourJump(d) {
    let step = parseInt(d[1]);

    return {hours: jumpRange(24, step)};
}

function hourRange(d, l, reject) {
    let minNum = parseInt((d[0] | "") + d[1]);
    let maxNum = parseInt((d[3] | "") + d[4]);

    if (maxNum <= minNum) {
        return reject;
    }

    return {hours: numRange(minNum, maxNum)};
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
    {"name": "minutes$ebnf$1", "symbols": [/[0-5]/], "postprocess": id},
    {"name": "minutes$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "minutes$ebnf$2", "symbols": [/[0-5]/], "postprocess": id},
    {"name": "minutes$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "minutes", "symbols": ["minutes$ebnf$1", /[0-9]/, {"literal":"-"}, "minutes$ebnf$2", /[0-9]/], "postprocess": minuteRange},
    {"name": "minutes$ebnf$3", "symbols": [/[0-5]/], "postprocess": id},
    {"name": "minutes$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "minutes", "symbols": ["minutes$ebnf$3", /[0-9]/], "postprocess": function(d) { return {minutes: [parseInt((d[0] | "") + d[1])]}; }},
    {"name": "hours", "symbols": [{"literal":"*"}], "postprocess": hourAll},
    {"name": "hours$string$1", "symbols": [{"literal":"*"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hours$subexpression$1", "symbols": [/[2346]/]},
    {"name": "hours$subexpression$1$string$1", "symbols": [{"literal":"1"}, {"literal":"2"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hours$subexpression$1", "symbols": ["hours$subexpression$1$string$1"]},
    {"name": "hours", "symbols": ["hours$string$1", "hours$subexpression$1"], "postprocess": hourJump},
    {"name": "hours$ebnf$1", "symbols": [/[0-5]/], "postprocess": id},
    {"name": "hours$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "hours$ebnf$2", "symbols": [/[0-5]/], "postprocess": id},
    {"name": "hours$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "hours", "symbols": ["hours$ebnf$1", /[0-9]/, {"literal":"-"}, "hours$ebnf$2", /[0-9]/], "postprocess": hourRange},
    {"name": "hours$ebnf$3", "symbols": [/[0-5]/], "postprocess": id},
    {"name": "hours$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "hours", "symbols": ["hours$ebnf$3", /[0-9]/], "postprocess": function(d) { return {hours: [parseInt((d[0] | "") + d[1])]}; }},
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
