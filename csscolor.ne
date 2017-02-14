main -> _ csscolor _ {% function(d) {return d[1]; } %}

csscolor ->
      "rgb" _ "(" _ colorValue _ "," _ colorValue _ "," _ colorValue  _ ")" _ {% function(d) { return {r: d[4], g: d[8], b: d[12]}; } %}
	| "rgba" _ "(" _ colorValue _ "," _ colorValue _ "," _ colorValue  _ "," _ opacityValue  _ ")" _ {% function(d) { return {r: d[4], g: d[8], b: d[12], a: d[16]}; } %}
	| "#" hex hex hex {% function (d) { return {r: 17*d[1], g: 17*d[2], b: 17*d[3]}; } %}
	| "#" hexpair hexpair hexpair {% function (d) { return {r: d[1], g: d[2], b: d[3]}; } %}

colorValue -> max255 {% id %}
        | percent {% id %}

opacityValue -> max1float {% id %}

max255 -> [0-9] {% function(d) { return parseInt(d[0]); } %}
        | [1-9] [0-9] {% function(d) { return parseInt(d.join("")); } %}
        | "1" [0-9] [0-9] {% function(d) { return parseInt(d.join("")); } %}
        | "2" [0-5] [0-5] {% function(d) { return parseInt(d.join("")); } %}

percent -> [0-9] "%" {% function(d) { return Math.round(2.55*parseInt(d[0])); } %}
        | [1-9] [0-9] "%" {% function(d) { delete d[d.length-1]; return Math.round(2.55*(parseFloat(d.join("")))); } %}
        | [1-9] [0-9] "." "%" {% function(d) { delete d[d.length-1]; return Math.round(2.55*(parseFloat(d.join("")))); } %}
        | [1-9] [0-9] "." [0-9]:+ "%" {% function(d) { delete d[d.length-1]; return Math.round(2.55*(parseFloat(d.join("")))); } %}
        | "100%" {% function(d) { return 255; } %}

max1float -> "0" ".":? {% function(d) { return 0.0; } %}
        | "0":? "." [0-9]:+ {% function(d) { return parseFloat(d.join("")); } %}
        | "1" ".":? {% function(d) { return 1.0; } %}
        | "1" "." "0":* {% function(d) { return 1.0; } %}

hex -> [0-9a-f] {% function(d) { return parseInt(d[0], 16); } %}

hexpair -> hex hex {% function(d) { return (16*d[0] + d[1]); } %}

_ -> [\s]:*     {% function(d) {return null; } %}
