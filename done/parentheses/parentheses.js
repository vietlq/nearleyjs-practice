// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
 function TRUE (d) { return true; } var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "P", "symbols": [{"literal":"("}, "E", {"literal":")"}], "postprocess": TRUE},
    {"name": "P", "symbols": [{"literal":"{"}, "E", {"literal":"}"}], "postprocess": TRUE},
    {"name": "P", "symbols": [{"literal":"["}, "E", {"literal":"]"}], "postprocess": TRUE},
    {"name": "P", "symbols": [{"literal":"<"}, "E", {"literal":">"}], "postprocess": TRUE},
    {"name": "E", "symbols": []},
    {"name": "E", "symbols": [{"literal":"("}, "E", {"literal":")"}, "E"]},
    {"name": "E", "symbols": [{"literal":"{"}, "E", {"literal":"}"}, "E"]},
    {"name": "E", "symbols": [{"literal":"["}, "E", {"literal":"]"}, "E"]},
    {"name": "E", "symbols": [{"literal":"<"}, "E", {"literal":">"}, "E"]}
]
  , ParserStart: "P"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
