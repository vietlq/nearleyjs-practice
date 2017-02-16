// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }
var grammar = {
    ParserRules: [
    {"name": "markdown", "symbols": ["lines"], "postprocess": id},
    {"name": "lines$ebnf$1", "symbols": []},
    {"name": "lines$ebnf$1$subexpression$1", "symbols": ["emptylines", "line"]},
    {"name": "lines$ebnf$1", "symbols": ["lines$ebnf$1$subexpression$1", "lines$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "lines", "symbols": ["lines$ebnf$1", "emptylines"], "postprocess":  function(d) {
            let output = [];
            for (let i in d[0]) {
                for (let j in d[0][i]) {
                    if (d[0][i][j]) {
                        output.push(d[0][i][j]);
                    }
                }
            }
            return output;
        } },
    {"name": "emptylines$ebnf$1", "symbols": []},
    {"name": "emptylines$ebnf$1", "symbols": [{"literal":"\n"}, "emptylines$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "emptylines", "symbols": ["emptylines$ebnf$1"], "postprocess": function(d) { return (d[0].length > 0) ? {emptylines: d[0].length} : null; }},
    {"name": "line", "symbols": ["h1", {"literal":"\n"}], "postprocess": function(d) { return d[0]; }},
    {"name": "line", "symbols": ["h2", {"literal":"\n"}], "postprocess": function(d) { return d[0]; }},
    {"name": "line", "symbols": ["h3", {"literal":"\n"}], "postprocess": function(d) { return d[0]; }},
    {"name": "line", "symbols": ["h4", {"literal":"\n"}], "postprocess": function(d) { return d[0]; }},
    {"name": "line", "symbols": ["h5", {"literal":"\n"}], "postprocess": function(d) { return d[0]; }},
    {"name": "line", "symbols": ["h6", {"literal":"\n"}], "postprocess": function(d) { return d[0]; }},
    {"name": "line", "symbols": ["sentence"], "postprocess": id},
    {"name": "sentence$ebnf$1", "symbols": ["fragment"]},
    {"name": "sentence$ebnf$1", "symbols": ["fragment", "sentence$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "sentence", "symbols": ["sentence$ebnf$1"], "postprocess": id},
    {"name": "sentence$ebnf$2", "symbols": [/[^#*\n]/]},
    {"name": "sentence$ebnf$2", "symbols": [/[^#*\n]/, "sentence$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "sentence", "symbols": ["sentence$ebnf$2"], "postprocess": function(d) { return {type: 'words', text: d[0].join("")}; }},
    {"name": "sentence", "symbols": ["fragment", "sentence"]},
    {"name": "sentence$ebnf$3", "symbols": [/[^#*\n]/]},
    {"name": "sentence$ebnf$3", "symbols": [/[^#*\n]/, "sentence$ebnf$3"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "sentence", "symbols": ["sentence$ebnf$3", "sentence"]},
    {"name": "fragment", "symbols": ["shortcode"], "postprocess": id},
    {"name": "fragment", "symbols": ["italic"], "postprocess": id},
    {"name": "fragment", "symbols": ["strong"], "postprocess": id},
    {"name": "fragment", "symbols": ["link"], "postprocess": id},
    {"name": "h1$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h1$ebnf$1", "symbols": [/[^\n]/, "h1$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "h1", "symbols": [{"literal":"#"}, "_", "h1$ebnf$1"], "postprocess": function(d) { return {h1: d[2].join("")}; }},
    {"name": "h2$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "h2$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h2$ebnf$1", "symbols": [/[^\n]/, "h2$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "h2", "symbols": ["h2$string$1", "_", "h2$ebnf$1"], "postprocess": function(d) { return {h2: d[2].join("")}; }},
    {"name": "h3$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"#"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "h3$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h3$ebnf$1", "symbols": [/[^\n]/, "h3$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "h3", "symbols": ["h3$string$1", "_", "h3$ebnf$1"], "postprocess": function(d) { return {h3: d[2].join("")}; }},
    {"name": "h4$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "h4$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h4$ebnf$1", "symbols": [/[^\n]/, "h4$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "h4", "symbols": ["h4$string$1", "_", "h4$ebnf$1"], "postprocess": function(d) { return {h4: d[2].join("")}; }},
    {"name": "h5$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "h5$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h5$ebnf$1", "symbols": [/[^\n]/, "h5$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "h5", "symbols": ["h5$string$1", "_", "h5$ebnf$1"], "postprocess": function(d) { return {h5: d[2].join("")}; }},
    {"name": "h6$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "h6$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h6$ebnf$1", "symbols": [/[^\n]/, "h6$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "h6", "symbols": ["h6$string$1", "_", "h6$ebnf$1"], "postprocess": function(d) { return {h6: d[2].join("")}; }},
    {"name": "shortcode$ebnf$1", "symbols": []},
    {"name": "shortcode$ebnf$1", "symbols": [/[^`]/, "shortcode$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "shortcode", "symbols": [{"literal":"`"}, "shortcode$ebnf$1", {"literal":"`"}], "postprocess": function(d) { return {shortcode: d[1].join("")}; }},
    {"name": "italic$ebnf$1", "symbols": [/[^*]/]},
    {"name": "italic$ebnf$1", "symbols": [/[^*]/, "italic$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "italic", "symbols": [{"literal":"*"}, "italic$ebnf$1", {"literal":"*"}], "postprocess": function(d) { return {italic: d[1].join("")}; }},
    {"name": "strong$string$1", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "strong$ebnf$1", "symbols": [/[^*]/]},
    {"name": "strong$ebnf$1", "symbols": [/[^*]/, "strong$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "strong$string$2", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "strong", "symbols": ["strong$string$1", "strong$ebnf$1", "strong$string$2"], "postprocess": function(d) { return {strong: d[1].join("")}; }},
    {"name": "link$ebnf$1", "symbols": [/[^\]]/]},
    {"name": "link$ebnf$1", "symbols": [/[^\]]/, "link$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "link$ebnf$2", "symbols": [/[^\)]/]},
    {"name": "link$ebnf$2", "symbols": [/[^\)]/, "link$ebnf$2"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "link", "symbols": [{"literal":"["}, "link$ebnf$1", {"literal":"]"}, {"literal":"("}, "link$ebnf$2", {"literal":")"}], "postprocess": function(d) { return {linkText: d[1].join(""), linkUrl: d[4].join("")}; }},
    {"name": "_$ebnf$1", "symbols": [/[\s]/]},
    {"name": "_$ebnf$1", "symbols": [/[\s]/, "_$ebnf$1"], "postprocess": function arrconcat(d) {return [d[0]].concat(d[1]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function() { return null; }}
]
  , ParserStart: "markdown"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
