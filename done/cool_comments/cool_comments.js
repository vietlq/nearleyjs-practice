// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
 function wrap(str) { return "(*" + str + "*)"; } var grammar = {
    ParserRules: [
    {"name": "comment$string$1", "symbols": [{"literal":"("}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comment$ebnf$1", "symbols": []},
    {"name": "comment$ebnf$1", "symbols": ["comment$ebnf$1", "commentContent"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "comment$string$2", "symbols": [{"literal":"*"}, {"literal":")"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "comment", "symbols": ["comment$string$1", "comment$ebnf$1", "comment$string$2"], "postprocess": function(d) { return d[1].join(""); }},
    {"name": "commentContent", "symbols": ["validCommentChar"], "postprocess": id},
    {"name": "commentContent", "symbols": ["comment"], "postprocess": function(d) { return wrap(d[0]); }},
    {"name": "commentContent$ebnf$1", "symbols": [{"literal":"("}]},
    {"name": "commentContent$ebnf$1", "symbols": ["commentContent$ebnf$1", {"literal":"("}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commentContent", "symbols": ["commentContent$ebnf$1", "comment"], "postprocess": function(d) { return d[0].join("") + wrap(d[1]); }},
    {"name": "commentContent$ebnf$2", "symbols": [{"literal":")"}]},
    {"name": "commentContent$ebnf$2", "symbols": ["commentContent$ebnf$2", {"literal":")"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commentContent", "symbols": ["comment", "commentContent$ebnf$2"], "postprocess": function(d) { return wrap(d[0]) + d[1].join(""); }},
    {"name": "commentContent$ebnf$3", "symbols": [{"literal":"("}]},
    {"name": "commentContent$ebnf$3", "symbols": ["commentContent$ebnf$3", {"literal":"("}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commentContent$ebnf$4", "symbols": [{"literal":")"}]},
    {"name": "commentContent$ebnf$4", "symbols": ["commentContent$ebnf$4", {"literal":")"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "commentContent", "symbols": ["commentContent$ebnf$3", "comment", "commentContent$ebnf$4"], "postprocess": function(d) { return d[0].join("") + wrap(d[1]) + d[2].join(""); }},
    {"name": "validCommentChar", "symbols": [/[^\(\)]/], "postprocess": id},
    {"name": "validCommentChar$ebnf$1", "symbols": [{"literal":"("}]},
    {"name": "validCommentChar$ebnf$1", "symbols": ["validCommentChar$ebnf$1", {"literal":"("}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "validCommentChar", "symbols": ["validCommentChar$ebnf$1", /[^\*\(\)]/], "postprocess": function(d) { return d[0].join("") + d[1]; }},
    {"name": "validCommentChar$ebnf$2", "symbols": [{"literal":")"}]},
    {"name": "validCommentChar$ebnf$2", "symbols": ["validCommentChar$ebnf$2", {"literal":")"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "validCommentChar", "symbols": [/[^\*\(\)]/, "validCommentChar$ebnf$2"], "postprocess": function(d) { return d[0] + d[1].join(""); }},
    {"name": "validCommentChar$ebnf$3", "symbols": [{"literal":"("}]},
    {"name": "validCommentChar$ebnf$3", "symbols": ["validCommentChar$ebnf$3", {"literal":"("}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "validCommentChar$ebnf$4", "symbols": [/[^\*\(\)]/], "postprocess": id},
    {"name": "validCommentChar$ebnf$4", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "validCommentChar$ebnf$5", "symbols": [{"literal":")"}]},
    {"name": "validCommentChar$ebnf$5", "symbols": ["validCommentChar$ebnf$5", {"literal":")"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "validCommentChar", "symbols": ["validCommentChar$ebnf$3", "validCommentChar$ebnf$4", "validCommentChar$ebnf$5"], "postprocess": function(d) { return d[0].join("") + (d[1] || '') + d[2].join(""); }}
]
  , ParserStart: "comment"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
