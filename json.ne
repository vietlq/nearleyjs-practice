# http://www.json.org/

json -> object {% id %} | array {% id %}

object -> "{" _ "}" {% function(d) { return {}; } %}
    | "{" _ pair (_ "," _ pair):* _ ("," _):? "}" {% function(d) {
    let output = {};

    if(d[2][0]) { output[d[2][0]] = d[2][1]; }

    for (let i in d[3]) {
        if(d[3][i][3][0]) { output[d[3][i][3][0]] = d[3][i][3][1]; }
    }

    return output;
} %}

array -> "[" _ "]" {% function(d) { return []; } %}
    | "[" _ value (_ "," _ value):* _ ("," _):? "]" {% function(d) {
    let output = [d[2]];

    for (let i in d[3]) {
        output.push(d[3][i][3]);
    }

    return output;
} %}

pair -> key _ ":" _ value {% function(d) { return [d[0], d[4]]; } %}

key -> string {% id %}

value ->
      object {% id %}
    | array {% id %}
    | number {% id %}
    | string {% id %}

number -> [0-9]:+ {% function(d) { return parseInt(d[0].join("")); } %}

string -> "\"" [^"]:+ "\"" {% function(d) { return d[1].join("") } %}

_ -> null | [\s]:+ {% function(d) { return null; } %}
