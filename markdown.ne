# https://en.support.wordpress.com/markdown-quick-reference/
# http://daringfireball.net/projects/markdown/
# https://michelf.ca/projects/php-markdown/extra/
# https://guides.github.com/features/mastering-markdown/
# http://www.webpagefx.com/tools/emoji-cheat-sheet/

markdown -> lines {% id %}

lines -> (emptylines line):* emptylines {% function(d) {
    let output = [];
    for (let i in d[0]) {
        for (let j in d[0][i]) {
            if (d[0][i][j]) {
                output.push(d[0][i][j]);
            }
        }
    }
    return output;
} %}

emptylines -> "\n":* {% function(d) { return (d[0].length > 0) ? {emptylines: d[0].length} : null; } %}

line ->
      h1 "\n" {% function(d) { return d[0]; } %}
    | h2 "\n" {% function(d) { return d[0]; } %}
    | h3 "\n" {% function(d) { return d[0]; } %}
    | h4 "\n" {% function(d) { return d[0]; } %}
    | h5 "\n" {% function(d) { return d[0]; } %}
    | h6 "\n" {% function(d) { return d[0]; } %}
    | ulistitem {% id %}
    | sentence {% id %}

ulistitem -> [ ]:* "* " sentence {% function(d) { return {type: 'ulistitem', value: d[2], ident: d[0].length}; } %}

sentence ->
      fragment {% id %}
    | normalText {% id %}
    | sentence fragment

normalText ->
      [^#*\s\n] [^#*\n]:* {% function(d) { return {type: 'words', text: d[0] + d[1].join("")}; } %}

fragment ->
      shortcode {% id %}
    | italic {% id %}
    | strong {% id %}
    | link {% id %}

h1 -> "#" _ [^\n]:+ {% function(d) { return {h1: d[2].join("")}; } %}
h2 -> "##" _ [^\n]:+ {% function(d) { return {h2: d[2].join("")}; } %}
h3 -> "###" _ [^\n]:+ {% function(d) { return {h3: d[2].join("")}; } %}
h4 -> "####" _ [^\n]:+ {% function(d) { return {h4: d[2].join("")}; } %}
h5 -> "#####" _ [^\n]:+ {% function(d) { return {h5: d[2].join("")}; } %}
h6 -> "######" _ [^\n]:+ {% function(d) { return {h6: d[2].join("")}; } %}

shortcode -> "`" [^`]:* "`" {% function(d) { return {shortcode: d[1].join("")}; } %}
italic -> "*" [^\s] [^*]:* "*" {% function(d) { return {italic: d[1] + d[2].join("")}; } %}
strong -> "**" [^\s] [^*]:* "**" {% function(d) { return {strong: d[1] + d[2].join("")}; } %}
link -> "[" [^\]]:+ "]" "(" [^\)]:+ ")" {% function(d) { return {linkText: d[1].join(""), linkUrl: d[4].join("")}; } %}

_ -> [\s]:+ {% function() { return null; } %}
