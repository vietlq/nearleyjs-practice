# https://en.support.wordpress.com/markdown-quick-reference/
# http://daringfireball.net/projects/markdown/
# https://michelf.ca/projects/php-markdown/extra/
# https://guides.github.com/features/mastering-markdown/
# http://www.webpagefx.com/tools/emoji-cheat-sheet/

@{%

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
function italic(d) { return wrap("em", d[1] + d[2].join("")); }

//function strong(d) { return {strong: (d[1] + d[2].join(""))}; }
function strong(d) { return wrap("strong", d[1] + d[2].join("")); }

//function link(d) { return {linkText: d[1].join(""), linkUrl: d[4].join("")}; }
function link(d) { return '<a href="' + d[4].join("") + '">' + d[1].join("") + '</a>'; }

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

    output.push(data[2].length);

    return output.join("\n");
}

function sentence(data, location, reject) {
    let output = [ data[0] ];

    for (let i in data[1]) {
        output.push(data[1][i][0].length);
        output.push(data[1][i][1]);
    }

    return output.join("");
}

%}

markdown -> "\n":* lines {% function(d) { return d[1]; } %}

lines -> line ("\n":+ line):* "\n":* {% processLines %}

line ->
      h1 {% id %}
    | h2 {% id %}
    | h3 {% id %}
    | h4 {% id %}
    | h5 {% id %}
    | h6 {% id %}
    | ulistitem {% id %}
    | sentence [ \t]:* {% function(d) { return d[0]; } %}

ulistitem ->
      " ":* "* " sentence {% ulistitem %}
    | " ":* "- " sentence {% ulistitem %}

sentence -> textOrFrag (" \t":* textOrFrag):* {% sentence %}

textOrFrag ->
      fragment {% id %}
    | normalText {% id %}

normalText -> [^*`#_\n-]:+ {% function(d) { return d[0].join(""); } %}

fragment ->
      shortcode {% id %}
    | italic {% id %}
    | strong {% id %}
    | link {% id %}

h1 -> "#" _ [^\n]:+ {% function(d) { return wrap("h1", d[2].join("")); } %}
h2 -> "##" _ [^\n]:+ {% function(d) { return wrap("h2", d[2].join("")); } %}
h3 -> "###" _ [^\n]:+ {% function(d) { return wrap("h3", d[2].join("")); } %}
h4 -> "####" _ [^\n]:+ {% function(d) { return wrap("h4", d[2].join("")); } %}
h5 -> "#####" _ [^\n]:+ {% function(d) { return wrap("h5", d[2].join("")); } %}
h6 -> "######" _ [^\n]:+ {% function(d) { return wrap("h6", d[2].join("")); } %}

shortcode ->
      "`" [^`]:* "`" {% shortcode %}

italic ->
      "*" [^*\s] [^*]:* "*" {% italic %}
    | "_" [^_\s] [^_]:* "_" {% italic %}

strong ->
      "**" [^*\s] [^*]:* "**" {% strong %}
    | "__" [^_\s] [^_]:* "__" {% strong %}

link ->
      "[" [^\]]:+ "]" "(" [^\)]:+ ")" {% link %}

_ ->
      [\s]:+ {% function() { return null; } %}
