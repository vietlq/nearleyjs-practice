colorValue -> max255
        | percent

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
