commands -> "\n":* command ("\n":+ command):* "\n":* {% function(d) {
    let output = [d[1]];
    for (let i in d[2]) {
        output.push(d[2][i][1]);
    }
    return output;
} %}

command ->
      crop {% id %}
    | copy {% id %}
    | cut {% id %}
    | rect {% id %}

crop -> _ "crop" _ xywh _ {% function(d) { return { type: "crop", args: d[3] }; } %}

copy -> _ "copy" _ xywh _ {% function(d) { return { type: "copy", args: d[3] }; } %}

cut -> _ "cut" _ xywh _ {% function(d) { return { type: "cut", args: d[3] }; } %}

rect -> _ "rect" _ xywh _ {% function(d) { return { type: "rect", args: d[3] }; } %}

xywh -> "(" _ coor _ "," _ coor _ ")" _ size _ "x" _ size {% function(d) { return {
    x: d[2], y: d[6], w: d[10], h: d[14]
}; } %}

coor -> [-+]:? size {% function(d) { return (d[0] == "-") ? -d[1] : d[1]; } %}

size ->
      "0" {% function(d) { return 0; } %}
    | [1-9] [0-9]:* {% function(d) { return parseInt(d[0] + d[1].join("")); } %}

_ -> null | [ \t]:+ {% function(d) { return null; } %}
