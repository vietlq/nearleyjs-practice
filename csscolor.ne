# https://www.w3schools.com/cssref/css_colors_legal.asp

main -> _ csscolor _ {% function(d) {return d[1]; } %}

csscolor -> "rgb" _ "(" _ max255 _ "," _ max255 _ "," _ max255  _ ")" _ {% function(d) { return {r: d[4], g: d[8], b: d[12]}; } %}
	| "rgba" _ "(" _ max255 _ "," _ max255 _ "," _ max255  _ "," _ max1float  _ ")" _ {% function(d) { return {r: d[4], g: d[8], b: d[12], a: d[16]}; } %}
	| "#" hex hex hex {% function (d) { return {r: 17*d[1], g: 17*d[2], b: 17*d[3]}; } %}
	| "#" hexpair hexpair hexpair {% function (d) { return {r: d[1], g: d[2], b: d[3]}; } %}
    | "hsl" _ "(" _ max360 _ "," _ percent _ "," _ percent  _ ")" {% function(d) { return {h: d[4], s: d[8], l: d[12]}; } %}
    | "hsla" _ "(" _ max360 _ "," _ percent _ "," _ percent _ "," _ max1float _ ")" {% function(d) { return {h: d[4], s: d[8], l: d[12], a: d[16]}; } %}

max255 -> [1-9]:? [0-9] {% function(d) { return parseInt(d.join("")); } %}
        | "1" [0-9] [0-9] {% function(d) { return parseInt(d.join("")); } %}
        | "2" [0-5] [0-5] {% function(d) { return parseInt(d.join("")); } %}

max360 -> [1-9]:? [0-9] {% function(d) { return parseInt(d.join("")); } %}
        | [1-2] [0-9] [0-9] {% function(d) { return parseInt(d.join("")); } %}
        | "3" [0-5] [0-9] {% function(d) { return parseInt(d.join("")); } %}
        | "360" {% function(d) { return parseInt(d.join("")); } %}

percent -> max100float "%" {% function(d) { return (0.01*d[0]); } %}

max100float -> "." [0-9]:+ {% function(d) { return parseFloat(d.join("")); } %}
        | [1-9]:? [0-9] ".":? {% function(d) { return parseFloat(d.join("")); } %}
        | [1-9]:? [0-9] "." [0-9]:+ {% function(d) { return parseFloat(d.join("")); } %}
        | "100" ".":? {% function(d) { return parseFloat(d.join("")); } %}
        | "100." "0":+ {% function(d) { return parseFloat(d.join("")); } %}

max1float -> "0" ".":? {% function(d) { return 0.0; } %}
        | "0":? "." [0-9]:+ {% function(d) { return parseFloat(d.join("")); } %}
        | "1" ".":? {% function(d) { return 1.0; } %}
        | "1" "." "0":* {% function(d) { return 1.0; } %}

hex -> [0-9a-f] {% function(d) { return parseInt(d[0], 16); } %}

hexpair -> hex hex {% function(d) { return (16*d[0] + d[1]); } %}

_ -> [\s]:*     {% function(d) {return null; } %}
