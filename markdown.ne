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
      h1 {% id %}
    | h2 {% id %}
    | h3 {% id %}
    | h4 {% id %}
    | h5 {% id %}
    | h6 {% id %}
    | fragment:+ {% id %}

fragment ->
      shortcode {% id %}
    | italic {% id %}
    | strong {% id %}
    | link {% id %}

h1 -> "#" _ [\w]:+ {% function(d) { return {h1: d[2].join("")}; } %}
h2 -> "##" _ [\w]:+ {% function(d) { return {h2: d[2].join("")}; } %}
h3 -> "###" _ [\w]:+ {% function(d) { return {h3: d[2].join("")}; } %}
h4 -> "####" _ [\w]:+ {% function(d) { return {h4: d[2].join("")}; } %}
h5 -> "#####" _ [\w]:+ {% function(d) { return {h5: d[2].join("")}; } %}
h6 -> "######" _ [\w]:+ {% function(d) { return {h6: d[2].join("")}; } %}

shortcode -> "`" [^`]:* "`" {% function(d) { return {shortcode: d[1].join("")}; } %}
italic -> "*" [^*]:+ "*" {% function(d) { return {italic: d[1].join("")}; } %}
strong -> "**" [^*]:+ "**" {% function(d) { return {strong: d[1].join("")}; } %}
link -> "[" [^\]]:+ "]" "(" [^\)]:+ ")" {% function(d) { return {linkText: d[1].join(""), linkUrl: d[4].join("")}; } %}

_ -> [\s]:+ {% function() { return null; } %}
