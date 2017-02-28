// Generated automatically by nearley
// http://github.com/Hardmath123/nearley
(function () {
function id(x) {return x[0]; }


function joinGrandChildren(data) {
    let output = [];
    for (let i in data) {
        output.push(data[i].join(""));
    }
    return output.join("");
}

function wrap(tag, content) {
    return ("<" + tag + ">" + content + "</" + tag + ">");
}

//function shortcode(d) { return {shortcode: d[1].join("")}; }
function shortcode(d) { return wrap("code", d[1].join("")); }

//function italic(d) { return {italic: (d[1] + d[2].join(""))}; }
//function italic(d) { return wrap("em", d[1] + d[2].join("").trim()); }
function italic1(d) { return wrap("em", d[1]); }
function italic2(d) { return wrap("em", d[1] + d[2].join("").trim() + d[3]); }

//function strong(d) { return {strong: (d[1] + d[2].join(""))}; }
//function strong(d) { return wrap("strong", d[1] + d[2].join("").trim()); }
function strong1(d) { return wrap("em", d[1]); }
function strong2(d) { return wrap("em", d[1] + d[2].join("").trim() + d[3]); }

//function link(d) { return {linkText: d[1].join(""), linkUrl: d[4].join("")}; }
function link(d) { return '<a href="' + d[3].join("") + '">' + d[1].join("") + '</a>'; }

//function ulistitem(d) { return {ulistitem: d[2]}; }
function ulistitem(d) { return wrap("li", d[2]); }

/*
function processLines(data, location, reject) {
    let output = [ data[0] ];

    for (let i in data[1]) {
        output.push([data[1][i][0].length]);
        output.push(data[1][i][1]);
    }

    output.push(data[2].length);

    return output;
}
*/

function processLines(data, location, reject) {
    let output = [ data[0] ];

    for (let i in data[1]) {
        for (let j = 0; j < data[1][i][0].length; ++j) {
            output.push("<br/>");
        }
        output.push(data[1][i][1]);
    }

    for (let j = 0; j < data[2].length; ++j) {
        output.push("<br/>");
    }

    return output.join("\n");
}

function sentence(data, location, reject) {
    let output = [ data[0] ];

    for (let i in data[1]) {
        output.push(data[1][i].join(""));
    }

    return output.join("");
}

var grammar = {
    ParserRules: [
    {"name": "markdown$ebnf$1", "symbols": []},
    {"name": "markdown$ebnf$1", "symbols": ["markdown$ebnf$1", {"literal":"\n"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "markdown", "symbols": ["markdown$ebnf$1", "lines"], "postprocess": function(d) { return d[1]; }},
    {"name": "lines$ebnf$1", "symbols": []},
    {"name": "lines$ebnf$1$subexpression$1$ebnf$1", "symbols": [{"literal":"\n"}]},
    {"name": "lines$ebnf$1$subexpression$1$ebnf$1", "symbols": ["lines$ebnf$1$subexpression$1$ebnf$1", {"literal":"\n"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "lines$ebnf$1$subexpression$1", "symbols": ["lines$ebnf$1$subexpression$1$ebnf$1", "line"]},
    {"name": "lines$ebnf$1", "symbols": ["lines$ebnf$1", "lines$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "lines$ebnf$2", "symbols": []},
    {"name": "lines$ebnf$2", "symbols": ["lines$ebnf$2", {"literal":"\n"}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "lines", "symbols": ["line", "lines$ebnf$1", "lines$ebnf$2"], "postprocess": processLines},
    {"name": "line", "symbols": ["h1"], "postprocess": id},
    {"name": "line", "symbols": ["h2"], "postprocess": id},
    {"name": "line", "symbols": ["h3"], "postprocess": id},
    {"name": "line", "symbols": ["h4"], "postprocess": id},
    {"name": "line", "symbols": ["h5"], "postprocess": id},
    {"name": "line", "symbols": ["h6"], "postprocess": id},
    {"name": "line", "symbols": ["ulistitem"], "postprocess": id},
    {"name": "line$ebnf$1", "symbols": []},
    {"name": "line$ebnf$1", "symbols": ["line$ebnf$1", /[ \t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "line", "symbols": ["sentence", "line$ebnf$1"], "postprocess": function(d) { return d[0]; }},
    {"name": "ulistitem$ebnf$1", "symbols": []},
    {"name": "ulistitem$ebnf$1", "symbols": ["ulistitem$ebnf$1", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ulistitem$string$1", "symbols": [{"literal":"*"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ulistitem", "symbols": ["ulistitem$ebnf$1", "ulistitem$string$1", "sentence"], "postprocess": ulistitem},
    {"name": "ulistitem$ebnf$2", "symbols": []},
    {"name": "ulistitem$ebnf$2", "symbols": ["ulistitem$ebnf$2", {"literal":" "}], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "ulistitem$string$2", "symbols": [{"literal":"-"}, {"literal":" "}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "ulistitem", "symbols": ["ulistitem$ebnf$2", "ulistitem$string$2", "sentence"], "postprocess": ulistitem},
    {"name": "sentence", "symbols": ["sentenceStart", "sentenceBody"]},
    {"name": "sentence$ebnf$1", "symbols": []},
    {"name": "sentence$ebnf$1$subexpression$1$ebnf$1", "symbols": []},
    {"name": "sentence$ebnf$1$subexpression$1$ebnf$1$string$1", "symbols": [{"literal":" "}, {"literal":"\t"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "sentence$ebnf$1$subexpression$1$ebnf$1", "symbols": ["sentence$ebnf$1$subexpression$1$ebnf$1", "sentence$ebnf$1$subexpression$1$ebnf$1$string$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sentence$ebnf$1$subexpression$1", "symbols": ["sentence$ebnf$1$subexpression$1$ebnf$1", "textOrFrag"]},
    {"name": "sentence$ebnf$1", "symbols": ["sentence$ebnf$1", "sentence$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sentence", "symbols": ["textOrFrag", "sentence$ebnf$1"], "postprocess": sentence},
    {"name": "sentence", "symbols": ["sentenceBody"], "postprocess": id},
    {"name": "textOrFrag", "symbols": ["fragment"], "postprocess": id},
    {"name": "textOrFrag", "symbols": ["sentenceStart"], "postprocess": id},
    {"name": "sentenceStart$ebnf$1", "symbols": [/[^\[*`#_\n-]/]},
    {"name": "sentenceStart$ebnf$1", "symbols": ["sentenceStart$ebnf$1", /[^\[*`#_\n-]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sentenceStart", "symbols": ["sentenceStart$ebnf$1"], "postprocess": function(d) { return d[0].join(""); }},
    {"name": "sentenceStart", "symbols": ["notFragment"]},
    {"name": "sentenceBody$ebnf$1", "symbols": ["sentenceStart"], "postprocess": id},
    {"name": "sentenceBody$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "sentenceBody", "symbols": [{"literal":"#"}, "sentenceBody$ebnf$1"], "postprocess": function(d) { return d[0] + (d[1] || ""); }},
    {"name": "sentenceBody$ebnf$2", "symbols": []},
    {"name": "sentenceBody$ebnf$2", "symbols": ["sentenceBody$ebnf$2", /[ \t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sentenceBody", "symbols": [{"literal":"*"}, "sentenceBody$ebnf$2"], "postprocess": function(d) { return d[0] + d[1].join(""); }},
    {"name": "sentenceBody$string$1", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "sentenceBody$ebnf$3", "symbols": []},
    {"name": "sentenceBody$ebnf$3", "symbols": ["sentenceBody$ebnf$3", /[ \t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sentenceBody", "symbols": ["sentenceBody$string$1", "sentenceBody$ebnf$3"], "postprocess": function(d) { return d[0] + d[1].join(""); }},
    {"name": "sentenceBody$ebnf$4", "symbols": []},
    {"name": "sentenceBody$ebnf$4", "symbols": ["sentenceBody$ebnf$4", /[ \t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sentenceBody", "symbols": [{"literal":"_"}, "sentenceBody$ebnf$4"], "postprocess": function(d) { return d[0] + d[1].join(""); }},
    {"name": "sentenceBody$string$2", "symbols": [{"literal":"_"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "sentenceBody$ebnf$5", "symbols": []},
    {"name": "sentenceBody$ebnf$5", "symbols": ["sentenceBody$ebnf$5", /[ \t]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "sentenceBody", "symbols": ["sentenceBody$string$2", "sentenceBody$ebnf$5"], "postprocess": function(d) { return d[0] + d[1].join(""); }},
    {"name": "sentenceBody", "symbols": ["notFragment"], "postprocess": id},
    {"name": "notFragment$ebnf$1", "symbols": []},
    {"name": "notFragment$ebnf$1", "symbols": ["notFragment$ebnf$1", /[^\n\]]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "notFragment$ebnf$2", "symbols": [/[^\n\(]/]},
    {"name": "notFragment$ebnf$2", "symbols": ["notFragment$ebnf$2", /[^\n\(]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "notFragment", "symbols": [{"literal":"["}, "notFragment$ebnf$1", {"literal":"]"}, "notFragment$ebnf$2"], "postprocess": function(d) { console.debug("notFragment:1"); return d[0] + d[1].join("") + d[2] + d[3].join(""); }},
    {"name": "notFragment$ebnf$3", "symbols": []},
    {"name": "notFragment$ebnf$3", "symbols": ["notFragment$ebnf$3", /[^\n\]]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "notFragment$string$1", "symbols": [{"literal":"]"}, {"literal":"("}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "notFragment$ebnf$4", "symbols": [/[^\n\)`*_]/]},
    {"name": "notFragment$ebnf$4", "symbols": ["notFragment$ebnf$4", /[^\n\)`*_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "notFragment", "symbols": [{"literal":"["}, "notFragment$ebnf$3", "notFragment$string$1", "notFragment$ebnf$4", {"literal":"\n"}], "postprocess": function(d) { console.debug("notFragment:2"); return d[0] + d[1].join("") + d[2] + d[3].join(""); }},
    {"name": "fragment", "symbols": ["shortcode"], "postprocess": id},
    {"name": "fragment", "symbols": ["italic"], "postprocess": id},
    {"name": "fragment", "symbols": ["strong"], "postprocess": id},
    {"name": "fragment", "symbols": ["link"], "postprocess": id},
    {"name": "h1$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h1$ebnf$1", "symbols": ["h1$ebnf$1", /[^\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "h1", "symbols": [{"literal":"#"}, "h1$ebnf$1"], "postprocess": function(d) { return wrap("h1", d[1].join("").trim()); }},
    {"name": "h2$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "h2$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h2$ebnf$1", "symbols": ["h2$ebnf$1", /[^\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "h2", "symbols": ["h2$string$1", "h2$ebnf$1"], "postprocess": function(d) { return wrap("h2", d[1].join("").trim()); }},
    {"name": "h3$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"#"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "h3$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h3$ebnf$1", "symbols": ["h3$ebnf$1", /[^\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "h3", "symbols": ["h3$string$1", "h3$ebnf$1"], "postprocess": function(d) { return wrap("h3", d[1].join("").trim()); }},
    {"name": "h4$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "h4$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h4$ebnf$1", "symbols": ["h4$ebnf$1", /[^\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "h4", "symbols": ["h4$string$1", "h4$ebnf$1"], "postprocess": function(d) { return wrap("h4", d[1].join("".trim())); }},
    {"name": "h5$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "h5$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h5$ebnf$1", "symbols": ["h5$ebnf$1", /[^\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "h5", "symbols": ["h5$string$1", "h5$ebnf$1"], "postprocess": function(d) { return wrap("h5", d[1].join("").trim()); }},
    {"name": "h6$string$1", "symbols": [{"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}, {"literal":"#"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "h6$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "h6$ebnf$1", "symbols": ["h6$ebnf$1", /[^\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "h6", "symbols": ["h6$string$1", "h6$ebnf$1"], "postprocess": function(d) { return wrap("h6", d[1].join("").trim()); }},
    {"name": "shortcode$ebnf$1", "symbols": []},
    {"name": "shortcode$ebnf$1", "symbols": ["shortcode$ebnf$1", /[^`]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "shortcode", "symbols": [{"literal":"`"}, "shortcode$ebnf$1", {"literal":"`"}], "postprocess": shortcode},
    {"name": "italic", "symbols": [{"literal":"*"}, /[^*\s]/, {"literal":"*"}], "postprocess": italic1},
    {"name": "italic", "symbols": [{"literal":"_"}, /[^_\s]/, {"literal":"_"}], "postprocess": italic1},
    {"name": "italic$ebnf$1", "symbols": []},
    {"name": "italic$ebnf$1", "symbols": ["italic$ebnf$1", /[^*]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "italic", "symbols": [{"literal":"*"}, /[^*\s]/, "italic$ebnf$1", /[^*\s]/, {"literal":"*"}], "postprocess": italic2},
    {"name": "italic$ebnf$2", "symbols": []},
    {"name": "italic$ebnf$2", "symbols": ["italic$ebnf$2", /[^_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "italic", "symbols": [{"literal":"_"}, /[^_\s]/, "italic$ebnf$2", /[^_\s]/, {"literal":"_"}], "postprocess": italic2},
    {"name": "strong$string$1", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "strong$string$2", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "strong", "symbols": ["strong$string$1", /[^*\s]/, "strong$string$2"], "postprocess": strong1},
    {"name": "strong$string$3", "symbols": [{"literal":"_"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "strong$string$4", "symbols": [{"literal":"_"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "strong", "symbols": ["strong$string$3", /[^_\s]/, "strong$string$4"], "postprocess": strong1},
    {"name": "strong$string$5", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "strong$ebnf$1", "symbols": []},
    {"name": "strong$ebnf$1", "symbols": ["strong$ebnf$1", /[^*]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "strong$string$6", "symbols": [{"literal":"*"}, {"literal":"*"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "strong", "symbols": ["strong$string$5", /[^*\s]/, "strong$ebnf$1", /[^*\s]/, "strong$string$6"], "postprocess": strong2},
    {"name": "strong$string$7", "symbols": [{"literal":"_"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "strong$ebnf$2", "symbols": []},
    {"name": "strong$ebnf$2", "symbols": ["strong$ebnf$2", /[^_]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "strong$string$8", "symbols": [{"literal":"_"}, {"literal":"_"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "strong", "symbols": ["strong$string$7", /[^_\s]/, "strong$ebnf$2", /[^_\s]/, "strong$string$8"], "postprocess": strong2},
    {"name": "link$ebnf$1", "symbols": [/[^\n\]]/]},
    {"name": "link$ebnf$1", "symbols": ["link$ebnf$1", /[^\n\]]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "link$string$1", "symbols": [{"literal":"]"}, {"literal":"("}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "link$ebnf$2", "symbols": [/[^\n\)]/]},
    {"name": "link$ebnf$2", "symbols": ["link$ebnf$2", /[^\n\)]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "link", "symbols": [{"literal":"["}, "link$ebnf$1", "link$string$1", "link$ebnf$2", {"literal":")"}], "postprocess": link},
    {"name": "_$ebnf$1", "symbols": [/[\s]/]},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[\s]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
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
