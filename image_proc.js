// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "commands$ebnf$1", "symbols": []},
    {"name": "commands$ebnf$1", "symbols": [{"literal":"\n"}, "commands$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "commands$ebnf$2", "symbols": []},
    {"name": "commands$ebnf$2$subexpression$1$ebnf$1", "symbols": [{"literal":"\n"}]},
    {"name": "commands$ebnf$2$subexpression$1$ebnf$1", "symbols": [{"literal":"\n"}, "commands$ebnf$2$subexpression$1$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "commands$ebnf$2$subexpression$1", "symbols": ["commands$ebnf$2$subexpression$1$ebnf$1", "command"]},
    {"name": "commands$ebnf$2", "symbols": ["commands$ebnf$2$subexpression$1", "commands$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "commands$ebnf$3", "symbols": []},
    {"name": "commands$ebnf$3", "symbols": [{"literal":"\n"}, "commands$ebnf$3"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "commands", "symbols": ["commands$ebnf$1", "command", "commands$ebnf$2", "commands$ebnf$3"], "postprocess":  function(d) {
            let output = [d[1]];
            for (let i in d[2]) {
                output.push(d[2][i][1]);
            }
            return output;
        } },
    {"name": "command", "symbols": ["crop"], "postprocess": id},
    {"name": "command", "symbols": ["copy"], "postprocess": id},
    {"name": "command", "symbols": ["cut"], "postprocess": id},
    {"name": "command", "symbols": ["rect"], "postprocess": id},
    {"name": "crop$string$1", "symbols": [{"literal":"c"}, {"literal":"r"}, {"literal":"o"}, {"literal":"p"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "crop", "symbols": ["_", "crop$string$1", "_", "xywh", "_"], "postprocess": function(d) { return { type: "crop", args: d[3] }; }},
    {"name": "copy$string$1", "symbols": [{"literal":"c"}, {"literal":"o"}, {"literal":"p"}, {"literal":"y"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "copy", "symbols": ["_", "copy$string$1", "_", "xywh", "_"], "postprocess": function(d) { return { type: "copy", args: d[3] }; }},
    {"name": "cut$string$1", "symbols": [{"literal":"c"}, {"literal":"u"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "cut", "symbols": ["_", "cut$string$1", "_", "xywh", "_"], "postprocess": function(d) { return { type: "cut", args: d[3] }; }},
    {"name": "rect$string$1", "symbols": [{"literal":"r"}, {"literal":"e"}, {"literal":"c"}, {"literal":"t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "rect", "symbols": ["_", "rect$string$1", "_", "xywh", "_"], "postprocess": function(d) { return { type: "rect", args: d[3] }; }},
    {"name": "xywh", "symbols": [{"literal":"("}, "_", "coor", "_", {"literal":","}, "_", "coor", "_", {"literal":")"}, "_", "size", "_", {"literal":"x"}, "_", "size"], "postprocess":  function(d) { return {
            x: d[2], y: d[6], w: d[10], h: d[14]
        }; } },
    {"name": "coor$ebnf$1", "symbols": [/[-+]/], "postprocess": id},
    {"name": "coor$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "coor", "symbols": ["coor$ebnf$1", "size"], "postprocess": function(d) { return (d[0] == "-") ? -d[1] : d[1]; }},
    {"name": "size", "symbols": [{"literal":"0"}], "postprocess": function(d) { return 0; }},
    {"name": "size$ebnf$1", "symbols": []},
    {"name": "size$ebnf$1", "symbols": [/[0-9]/, "size$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "size", "symbols": [/[1-9]/, "size$ebnf$1"], "postprocess": function(d) { return parseInt(d[0] + d[1].join("")); }},
    {"name": "_", "symbols": []},
    {"name": "_$ebnf$1", "symbols": [/[ \t]/]},
    {"name": "_$ebnf$1", "symbols": [/[ \t]/, "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) { return null; }}
]
  , ParserStart: "commands"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
