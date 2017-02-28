// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }


function retInt(data, location, reject) {
    return parseInt(data.join(""));
}

function retFloat(data, location, reject) {
    return parseFloat(data.join(""));
}

function triHex(data, location, reject) {
    return {r: 17*data[1], g: 17*data[2], b: 17*data[3]};
}

function triHexPair(data, location, reject) {
    return {r: data[1], g: data[2], b: data[3]};
}

function retRGB(data, location, reject) {
    return {r: data[4], g: data[8], b: data[12]};
}

function retRGBA(data, location, reject) {
    return {r: data[4], g: data[8], b: data[12], a: data[16]};
}

function retHSL(data, location, reject) {
    return {h: data[4], s: data[8], l: data[12]};
}

function retHSLA(data, location, reject) {
    return {h: data[4], s: data[8], l: data[12], a: data[16]};
}

var grammar = {
    ParserRules: [
    {"name": "main", "symbols": ["_", "csscolor", "_"], "postprocess": function(d) {return d[1]; }},
    {"name": "csscolor", "symbols": ["rgb"], "postprocess": id},
    {"name": "csscolor", "symbols": ["rgba"], "postprocess": id},
    {"name": "csscolor", "symbols": ["trihex"], "postprocess": id},
    {"name": "csscolor", "symbols": ["trihexpair"], "postprocess": id},
    {"name": "csscolor", "symbols": ["hsl"], "postprocess": id},
    {"name": "csscolor", "symbols": ["hsla"], "postprocess": id},
    {"name": "rgb$string$1", "symbols": [{"literal":"r"}, {"literal":"g"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "rgb", "symbols": ["rgb$string$1", "_", {"literal":"("}, "_", "max255", "_", {"literal":","}, "_", "max255", "_", {"literal":","}, "_", "max255", "_", {"literal":")"}, "_"], "postprocess": retRGB},
    {"name": "rgba$string$1", "symbols": [{"literal":"r"}, {"literal":"g"}, {"literal":"b"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "rgba", "symbols": ["rgba$string$1", "_", {"literal":"("}, "_", "max255", "_", {"literal":","}, "_", "max255", "_", {"literal":","}, "_", "max255", "_", {"literal":","}, "_", "max1float", "_", {"literal":")"}, "_"], "postprocess": retRGBA},
    {"name": "trihex", "symbols": [{"literal":"#"}, "hex", "hex", "hex"], "postprocess": triHex},
    {"name": "trihexpair", "symbols": [{"literal":"#"}, "hexpair", "hexpair", "hexpair"], "postprocess": triHexPair},
    {"name": "hsl$string$1", "symbols": [{"literal":"h"}, {"literal":"s"}, {"literal":"l"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hsl", "symbols": ["hsl$string$1", "_", {"literal":"("}, "_", "max360", "_", {"literal":","}, "_", "percent", "_", {"literal":","}, "_", "percent", "_", {"literal":")"}], "postprocess": retHSL},
    {"name": "hsla$string$1", "symbols": [{"literal":"h"}, {"literal":"s"}, {"literal":"l"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "hsla", "symbols": ["hsla$string$1", "_", {"literal":"("}, "_", "max360", "_", {"literal":","}, "_", "percent", "_", {"literal":","}, "_", "percent", "_", {"literal":","}, "_", "max1float", "_", {"literal":")"}], "postprocess": retHSLA},
    {"name": "max255$ebnf$1", "symbols": [/[1-9]/], "postprocess": id},
    {"name": "max255$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max255", "symbols": ["max255$ebnf$1", /[0-9]/], "postprocess": retInt},
    {"name": "max255", "symbols": [{"literal":"1"}, /[0-9]/, /[0-9]/], "postprocess": retInt},
    {"name": "max255", "symbols": [{"literal":"2"}, /[0-5]/, /[0-5]/], "postprocess": retInt},
    {"name": "max360$ebnf$1", "symbols": [/[1-9]/], "postprocess": id},
    {"name": "max360$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max360", "symbols": ["max360$ebnf$1", /[0-9]/], "postprocess": retInt},
    {"name": "max360", "symbols": [/[1-2]/, /[0-9]/, /[0-9]/], "postprocess": retInt},
    {"name": "max360", "symbols": [{"literal":"3"}, /[0-5]/, /[0-9]/], "postprocess": retInt},
    {"name": "max360$string$1", "symbols": [{"literal":"3"}, {"literal":"6"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "max360", "symbols": ["max360$string$1"], "postprocess": retInt},
    {"name": "percent", "symbols": ["max100float", {"literal":"%"}], "postprocess": function(d) { return (0.01*d[0]); }},
    {"name": "max100float$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "max100float$ebnf$1", "symbols": ["max100float$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "max100float", "symbols": [{"literal":"."}, "max100float$ebnf$1"], "postprocess": retFloat},
    {"name": "max100float$ebnf$2", "symbols": [/[1-9]/], "postprocess": id},
    {"name": "max100float$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max100float$ebnf$3", "symbols": [{"literal":"."}], "postprocess": id},
    {"name": "max100float$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max100float", "symbols": ["max100float$ebnf$2", /[0-9]/, "max100float$ebnf$3"], "postprocess": retFloat},
    {"name": "max100float$ebnf$4", "symbols": [/[1-9]/], "postprocess": id},
    {"name": "max100float$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max100float$ebnf$5", "symbols": [/[0-9]/]},
    {"name": "max100float$ebnf$5", "symbols": ["max100float$ebnf$5", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "max100float", "symbols": ["max100float$ebnf$4", /[0-9]/, {"literal":"."}, "max100float$ebnf$5"], "postprocess": retFloat},
    {"name": "max100float$string$1", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "max100float$ebnf$6", "symbols": [{"literal":"."}], "postprocess": id},
    {"name": "max100float$ebnf$6", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max100float", "symbols": ["max100float$string$1", "max100float$ebnf$6"], "postprocess": retFloat},
    {"name": "max100float$string$2", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":"."}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "max100float$ebnf$7", "symbols": [{"literal":"0"}]},
    {"name": "max100float$ebnf$7", "symbols": ["max100float$ebnf$7", {"literal":"0"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "max100float", "symbols": ["max100float$string$2", "max100float$ebnf$7"], "postprocess": retFloat},
    {"name": "max1float$ebnf$1", "symbols": [{"literal":"."}], "postprocess": id},
    {"name": "max1float$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max1float", "symbols": [{"literal":"0"}, "max1float$ebnf$1"], "postprocess": function(d) { return 0.0; }},
    {"name": "max1float$ebnf$2", "symbols": [{"literal":"0"}], "postprocess": id},
    {"name": "max1float$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max1float$ebnf$3", "symbols": [/[0-9]/]},
    {"name": "max1float$ebnf$3", "symbols": ["max1float$ebnf$3", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "max1float", "symbols": ["max1float$ebnf$2", {"literal":"."}, "max1float$ebnf$3"], "postprocess": retFloat},
    {"name": "max1float$ebnf$4", "symbols": [{"literal":"."}], "postprocess": id},
    {"name": "max1float$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max1float", "symbols": [{"literal":"1"}, "max1float$ebnf$4"], "postprocess": function(d) { return 1.0; }},
    {"name": "max1float$ebnf$5", "symbols": []},
    {"name": "max1float$ebnf$5", "symbols": ["max1float$ebnf$5", {"literal":"0"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "max1float", "symbols": [{"literal":"1"}, {"literal":"."}, "max1float$ebnf$5"], "postprocess": function(d) { return 1.0; }},
    {"name": "hex", "symbols": [/[0-9a-f]/], "postprocess": function(d) { return parseInt(d[0], 16); }},
    {"name": "hexpair", "symbols": ["hex", "hex"], "postprocess": function(d) { return (16*d[0] + d[1]); }},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null; }}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
