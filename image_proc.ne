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

crop -> _ "crop" _ "(" _ coor _ "," _ coor _ ")" _ size _ "x" _ size _ {% function(d) { return {
    type: "crop",
    args: {
        x: d[5], y: d[9], w: d[13], h: d[17]
    }
}; } %}

copy -> _ "copy" _ "(" _ coor _ "," _ coor _ ")" _ size _ "x" _ size _ {% function(d) { return {
    type: "copy",
    args: {
        x: d[5], y: d[9], w: d[13], h: d[17]
    }
}; } %}

cut -> _ "cut" _ "(" _ coor _ "," _ coor _ ")" _ size _ "x" _ size _ {% function(d) { return {
    type: "cut",
    args: {
        x: d[5], y: d[9], w: d[13], h: d[17]
    }
}; } %}

coor -> [-+]:? size {% function(d) { return (d[0] == "-") ? -d[1] : d[1]; } %}

size ->
      "0" {% function(d) { return 0; } %}
    | [1-9] [0-9]:* {% function(d) { return parseInt(d[0] + d[1].join("")); } %}

_ -> null | [ \t]:+ {% function(d) { return null; } %}
