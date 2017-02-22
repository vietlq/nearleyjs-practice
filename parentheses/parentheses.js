// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "E", "symbols": []},
    {"name": "E", "symbols": [{"literal":"("}, "E", {"literal":")"}]},
    {"name": "E$ebnf$1$subexpression$1", "symbols": [{"literal":"("}, "E", {"literal":")"}]},
    {"name": "E$ebnf$1", "symbols": ["E$ebnf$1$subexpression$1"]},
    {"name": "E$ebnf$1$subexpression$2", "symbols": [{"literal":"("}, "E", {"literal":")"}]},
    {"name": "E$ebnf$1", "symbols": ["E$ebnf$1$subexpression$2", "E$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "E", "symbols": [{"literal":"("}, "E", "E$ebnf$1", {"literal":")"}]}
]
  , ParserStart: "E"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
