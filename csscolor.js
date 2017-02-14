// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "main", "symbols": ["_", "csscolor", "_"], "postprocess": function(d) {return d[1]; }},
    {"name": "csscolor$string$1", "symbols": [{"literal":"r"}, {"literal":"g"}, {"literal":"b"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "csscolor", "symbols": ["csscolor$string$1", "_", {"literal":"("}, "_", "colorValue", "_", {"literal":","}, "_", "colorValue", "_", {"literal":","}, "_", "colorValue", "_", {"literal":")"}, "_"], "postprocess": function(d) { return {r: d[4], g: d[8], b: d[12]}; }},
    {"name": "csscolor$string$2", "symbols": [{"literal":"r"}, {"literal":"g"}, {"literal":"b"}, {"literal":"a"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "csscolor", "symbols": ["csscolor$string$2", "_", {"literal":"("}, "_", "colorValue", "_", {"literal":","}, "_", "colorValue", "_", {"literal":","}, "_", "colorValue", "_", {"literal":","}, "_", "opacityValue", "_", {"literal":")"}, "_"], "postprocess": function(d) { return {r: d[4], g: d[8], b: d[12], a: d[16]}; }},
    {"name": "csscolor", "symbols": [{"literal":"#"}, "hex", "hex", "hex"], "postprocess": function (d) { return {r: 17*d[1], g: 17*d[2], b: 17*d[3]}; }},
    {"name": "csscolor", "symbols": [{"literal":"#"}, "hexpair", "hexpair", "hexpair"], "postprocess": function (d) { return {r: d[1], g: d[2], b: d[3]}; }},
    {"name": "colorValue", "symbols": ["max255"], "postprocess": id},
    {"name": "colorValue", "symbols": ["percent"], "postprocess": id},
    {"name": "opacityValue", "symbols": ["max1float"], "postprocess": id},
    {"name": "max255", "symbols": [/[0-9]/], "postprocess": function(d) { return parseInt(d[0]); }},
    {"name": "max255", "symbols": [/[1-9]/, /[0-9]/], "postprocess": function(d) { return parseInt(d.join("")); }},
    {"name": "max255", "symbols": [{"literal":"1"}, /[0-9]/, /[0-9]/], "postprocess": function(d) { return parseInt(d.join("")); }},
    {"name": "max255", "symbols": [{"literal":"2"}, /[0-5]/, /[0-5]/], "postprocess": function(d) { return parseInt(d.join("")); }},
    {"name": "percent", "symbols": [/[0-9]/, {"literal":"%"}], "postprocess": function(d) { return Math.round(2.55*parseInt(d[0])); }},
    {"name": "percent", "symbols": [/[1-9]/, /[0-9]/, {"literal":"%"}], "postprocess": function(d) { delete d[d.length-1]; return Math.round(2.55*(parseFloat(d.join("")))); }},
    {"name": "percent", "symbols": [/[1-9]/, /[0-9]/, {"literal":"."}, {"literal":"%"}], "postprocess": function(d) { delete d[d.length-1]; return Math.round(2.55*(parseFloat(d.join("")))); }},
    {"name": "percent$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "percent$ebnf$1", "symbols": [/[0-9]/, "percent$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "percent", "symbols": [/[1-9]/, /[0-9]/, {"literal":"."}, "percent$ebnf$1", {"literal":"%"}], "postprocess": function(d) { delete d[d.length-1]; return Math.round(2.55*(parseFloat(d.join("")))); }},
    {"name": "percent$string$1", "symbols": [{"literal":"1"}, {"literal":"0"}, {"literal":"0"}, {"literal":"%"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "percent", "symbols": ["percent$string$1"], "postprocess": function(d) { return 255; }},
    {"name": "max1float$ebnf$1", "symbols": [{"literal":"."}], "postprocess": id},
    {"name": "max1float$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max1float", "symbols": [{"literal":"0"}, "max1float$ebnf$1"], "postprocess": function(d) { return 0.0; }},
    {"name": "max1float$ebnf$2", "symbols": [{"literal":"0"}], "postprocess": id},
    {"name": "max1float$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max1float$ebnf$3", "symbols": [/[0-9]/]},
    {"name": "max1float$ebnf$3", "symbols": [/[0-9]/, "max1float$ebnf$3"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "max1float", "symbols": ["max1float$ebnf$2", {"literal":"."}, "max1float$ebnf$3"], "postprocess": function(d) { return parseFloat(d.join("")); }},
    {"name": "max1float$ebnf$4", "symbols": [{"literal":"."}], "postprocess": id},
    {"name": "max1float$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "max1float", "symbols": [{"literal":"1"}, "max1float$ebnf$4"], "postprocess": function(d) { return 1.0; }},
    {"name": "max1float$ebnf$5", "symbols": []},
    {"name": "max1float$ebnf$5", "symbols": [{"literal":"0"}, "max1float$ebnf$5"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "max1float", "symbols": [{"literal":"1"}, {"literal":"."}, "max1float$ebnf$5"], "postprocess": function(d) { return 1.0; }},
    {"name": "hex", "symbols": [/[0-9a-f]/], "postprocess": function(d) { return parseInt(d[0], 16); }},
    {"name": "hexpair", "symbols": ["hex", "hex"], "postprocess": function(d) { return (16*d[0] + d[1]); }},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": [/[\s]/, "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
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
