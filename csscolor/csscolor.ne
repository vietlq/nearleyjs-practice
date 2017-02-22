# https://www.w3schools.com/cssref/css_colors_legal.asp

@{%

function retInt(data, location, reject) {
    return parseInt(data.join(""));
}

function retFloat(data, location, reject) {
    return parseFloat(data.join(""));
}

function triHex(data, location, reject) {
    return {r: 17*data[1], g: 17*data[2], b: 17*data[3]};
}

function triHexPair(data, location, reject) {
    return {r: data[1], g: data[2], b: data[3]};
}

function retRGB(data, location, reject) {
    return {r: data[4], g: data[8], b: data[12]};
}

function retRGBA(data, location, reject) {
    return {r: data[4], g: data[8], b: data[12], a: data[16]};
}

function retHSL(data, location, reject) {
    return {h: data[4], s: data[8], l: data[12]};
}

function retHSLA(data, location, reject) {
    return {h: data[4], s: data[8], l: data[12], a: data[16]};
}

%}

main -> _ csscolor _ {% function(d) {return d[1]; } %}

csscolor -> rgb     {% id %}
    | rgba          {% id %}
    | trihex        {% id %}
    | trihexpair    {% id %}
    | hsl           {% id %}
    | hsla          {% id %}

rgb -> "rgb" _ "(" _ max255 _ "," _ max255 _ "," _ max255  _ ")" _ {% retRGB %}

rgba -> "rgba" _ "(" _ max255 _ "," _ max255 _ "," _ max255  _ "," _ max1float  _ ")" _ {% retRGBA %}

trihex -> "#" hex hex hex {% triHex %}

trihexpair -> "#" hexpair hexpair hexpair {% triHexPair %}

hsl -> "hsl" _ "(" _ max360 _ "," _ percent _ "," _ percent  _ ")" {% retHSL %}

hsla -> "hsla" _ "(" _ max360 _ "," _ percent _ "," _ percent _ "," _ max1float _ ")" {% retHSLA %}

max255 -> [1-9]:? [0-9] {% retInt %}
        | "1" [0-9] [0-9] {% retInt %}
        | "2" [0-5] [0-5] {% retInt %}

max360 -> [1-9]:? [0-9] {% retInt %}
        | [1-2] [0-9] [0-9] {% retInt %}
        | "3" [0-5] [0-9] {% retInt %}
        | "360" {% retInt %}

percent -> max100float "%" {% function(d) { return (0.01*d[0]); } %}

max100float -> "." [0-9]:+ {% retFloat %}
        | [1-9]:? [0-9] ".":? {% retFloat %}
        | [1-9]:? [0-9] "." [0-9]:+ {% retFloat %}
        | "100" ".":? {% retFloat %}
        | "100." "0":+ {% retFloat %}

max1float -> "0" ".":? {% function(d) { return 0.0; } %}
        | "0":? "." [0-9]:+ {% retFloat %}
        | "1" ".":? {% function(d) { return 1.0; } %}
        | "1" "." "0":* {% function(d) { return 1.0; } %}

hex -> [0-9a-f] {% function(d) { return parseInt(d[0], 16); } %}

hexpair -> hex hex {% function(d) { return (16*d[0] + d[1]); } %}

_ -> [\s]:*     {% function(d) {return null; } %}
