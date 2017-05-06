// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }


function extractPair(kv, output) {
    if(kv[0]) { output[kv[0]] = kv[1]; }
}

function extractObject(d) {
    let output = {};

    extractPair(d[2], output);

    for (let i in d[3]) {
        extractPair(d[3][i][3], output);
    }

    return output;
}

function extractArray(d) {
    let output = [d[2]];

    for (let i in d[3]) {
        output.push(d[3][i][3]);
    }

    return output;
}

function unicodehex(d) {
    let codePoint = parseInt(d[1]+d[2]+d[3]+d[4], 16);

    // Handle '\\'
    if (codePoint == 92) {
        return "\\";
    }

    return String.fromCodePoint(codePoint);
}

function extractNumber(d) {
    let value = (d[0] || '') + d[1] + (d[2] || '') + (d[3] || '');
    return parseFloat(value);
}

var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "json$ebnf$1", "symbols": []},
    {"name": "json$ebnf$1", "symbols": ["json$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "json$subexpression$1", "symbols": ["object"]},
    {"name": "json$subexpression$1", "symbols": ["array"]},
    {"name": "json$ebnf$2", "symbols": []},
    {"name": "json$ebnf$2", "symbols": ["json$ebnf$2", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "json", "symbols": ["json$ebnf$1", "json$subexpression$1", "json$ebnf$2"], "postprocess": function(d) { return d[1][0]; }},
    {"name": "object", "symbols": [{"literal":"{"}, "_", {"literal":"}"}], "postprocess": function(d) { return {}; }},
    {"name": "object$ebnf$1", "symbols": []},
    {"name": "object$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "pair"]},
    {"name": "object$ebnf$1", "symbols": ["object$ebnf$1", "object$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "object", "symbols": [{"literal":"{"}, "_", "pair", "object$ebnf$1", "_", {"literal":"}"}], "postprocess": extractObject},
    {"name": "array", "symbols": [{"literal":"["}, "_", {"literal":"]"}], "postprocess": function(d) { return []; }},
    {"name": "array$ebnf$1", "symbols": []},
    {"name": "array$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "value"]},
    {"name": "array$ebnf$1", "symbols": ["array$ebnf$1", "array$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "array", "symbols": [{"literal":"["}, "_", "value", "array$ebnf$1", "_", {"literal":"]"}], "postprocess": extractArray},
    {"name": "value", "symbols": ["object"], "postprocess": id},
    {"name": "value", "symbols": ["array"], "postprocess": id},
    {"name": "value", "symbols": ["number"], "postprocess": id},
    {"name": "value", "symbols": ["string"], "postprocess": id},
    {"name": "value$string$1", "symbols": [{"literal":"t"}, {"literal":"r"}, {"literal":"u"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "value", "symbols": ["value$string$1"], "postprocess": function(d) { return true; }},
    {"name": "value$string$2", "symbols": [{"literal":"f"}, {"literal":"a"}, {"literal":"l"}, {"literal":"s"}, {"literal":"e"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "value", "symbols": ["value$string$2"], "postprocess": function(d) { return false; }},
    {"name": "value$string$3", "symbols": [{"literal":"n"}, {"literal":"u"}, {"literal":"l"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "value", "symbols": ["value$string$3"], "postprocess": function(d) { return null; }},
    {"name": "number$ebnf$1", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "number$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "number$subexpression$1", "symbols": [{"literal":"0"}]},
    {"name": "number$subexpression$1", "symbols": ["intPart"]},
    {"name": "number$ebnf$2", "symbols": ["fracPart"], "postprocess": id},
    {"name": "number$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "number$ebnf$3", "symbols": ["expPart"], "postprocess": id},
    {"name": "number$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "number", "symbols": ["number$ebnf$1", "number$subexpression$1", "number$ebnf$2", "number$ebnf$3"], "postprocess": extractNumber},
    {"name": "string$ebnf$1", "symbols": []},
    {"name": "string$ebnf$1", "symbols": ["string$ebnf$1", "validChar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "string", "symbols": [{"literal":"\""}, "string$ebnf$1", {"literal":"\""}], "postprocess": function(d) { return d[1].join("") }},
    {"name": "pair", "symbols": ["key", "_", {"literal":":"}, "_", "value"], "postprocess": function(d) { return [d[0], d[4]]; }},
    {"name": "key", "symbols": ["string"], "postprocess": id},
    {"name": "intPart$ebnf$1", "symbols": []},
    {"name": "intPart$ebnf$1", "symbols": ["intPart$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "intPart", "symbols": [/[1-9]/, "intPart$ebnf$1"], "postprocess": function(d) { return d[0] + d[1].join(""); }},
    {"name": "fracPart$ebnf$1", "symbols": []},
    {"name": "fracPart$ebnf$1", "symbols": ["fracPart$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "fracPart", "symbols": [{"literal":"."}, "fracPart$ebnf$1"], "postprocess": function(d) { return d[0] + d[1].join(""); }},
    {"name": "expPart$ebnf$1", "symbols": [/[+-]/], "postprocess": id},
    {"name": "expPart$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "expPart$ebnf$2", "symbols": []},
    {"name": "expPart$ebnf$2", "symbols": ["expPart$ebnf$2", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "expPart", "symbols": [/[eE]/, "expPart$ebnf$1", "expPart$ebnf$2"], "postprocess": function(d) { return d[0] + (d[1] || '') + d[2].join(""); }},
    {"name": "validChar", "symbols": [/[^"\\]/], "postprocess": function(d) { return d[0]; }},
    {"name": "validChar$string$1", "symbols": [{"literal":"\\"}, {"literal":"\""}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "validChar", "symbols": ["validChar$string$1"], "postprocess": function(d) { return "\""; }},
    {"name": "validChar$string$2", "symbols": [{"literal":"\\"}, {"literal":"\\"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "validChar", "symbols": ["validChar$string$2"], "postprocess": function(d) { return "\\"; }},
    {"name": "validChar$string$3", "symbols": [{"literal":"\\"}, {"literal":"/"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "validChar", "symbols": ["validChar$string$3"], "postprocess": function(d) { return "/"; }},
    {"name": "validChar$string$4", "symbols": [{"literal":"\\"}, {"literal":"n"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "validChar", "symbols": ["validChar$string$4"], "postprocess": function(d) { return "\n"; }},
    {"name": "validChar$string$5", "symbols": [{"literal":"\\"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "validChar", "symbols": ["validChar$string$5"], "postprocess": function(d) { return "\b"; }},
    {"name": "validChar$string$6", "symbols": [{"literal":"\\"}, {"literal":"f"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "validChar", "symbols": ["validChar$string$6"], "postprocess": function(d) { return "\f"; }},
    {"name": "validChar$string$7", "symbols": [{"literal":"\\"}, {"literal":"r"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "validChar", "symbols": ["validChar$string$7"], "postprocess": function(d) { return "\r"; }},
    {"name": "validChar$string$8", "symbols": [{"literal":"\\"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "validChar", "symbols": ["validChar$string$8"], "postprocess": function(d) { return "\t"; }},
    {"name": "validChar$string$9", "symbols": [{"literal":"\\"}, {"literal":"u"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "validChar", "symbols": ["validChar$string$9", "hex", "hex", "hex", "hex"], "postprocess": unicodehex},
    {"name": "hex", "symbols": [/[0-9a-fA-F]/], "postprocess": function(d) { return d[0]; }},
    {"name": "_", "symbols": []},
    {"name": "_$ebnf$1", "symbols": [/[\s]/]},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) { return null; }}
]
  , ParserStart: "json"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
