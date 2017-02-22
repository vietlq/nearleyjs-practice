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

var grammar = {
    ParserRules: [
    {"name": "json", "symbols": ["object"], "postprocess": id},
    {"name": "json", "symbols": ["array"], "postprocess": id},
    {"name": "object", "symbols": [{"literal":"{"}, "_", {"literal":"}"}], "postprocess": function(d) { return {}; }},
    {"name": "object$ebnf$1", "symbols": []},
    {"name": "object$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "pair"]},
    {"name": "object$ebnf$1", "symbols": ["object$ebnf$1$subexpression$1", "object$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "object", "symbols": [{"literal":"{"}, "_", "pair", "object$ebnf$1", "_", {"literal":"}"}], "postprocess": extractObject},
    {"name": "array", "symbols": [{"literal":"["}, "_", {"literal":"]"}], "postprocess": function(d) { return []; }},
    {"name": "array$ebnf$1", "symbols": []},
    {"name": "array$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "value"]},
    {"name": "array$ebnf$1", "symbols": ["array$ebnf$1$subexpression$1", "array$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "array", "symbols": [{"literal":"["}, "_", "value", "array$ebnf$1", "_", {"literal":"]"}], "postprocess": extractArray},
    {"name": "pair", "symbols": ["key", "_", {"literal":":"}, "_", "value"], "postprocess": function(d) { return [d[0], d[4]]; }},
    {"name": "key", "symbols": ["string"], "postprocess": id},
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
    {"name": "number$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "number$ebnf$1", "symbols": [/[0-9]/, "number$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "number", "symbols": ["number$ebnf$1"], "postprocess": function(d) { return parseInt(d[0].join("")); }},
    {"name": "string$ebnf$1", "symbols": [/[^"]/]},
    {"name": "string$ebnf$1", "symbols": [/[^"]/, "string$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "string", "symbols": [{"literal":"\""}, "string$ebnf$1", {"literal":"\""}], "postprocess": function(d) { return d[1].join("") }},
    {"name": "_", "symbols": []},
    {"name": "_$ebnf$1", "symbols": [/[\s]/]},
    {"name": "_$ebnf$1", "symbols": [/[\s]/, "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
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
