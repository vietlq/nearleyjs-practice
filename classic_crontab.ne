statement -> minutes _ hours {% cronFunc %}

minutes ->
      "*" {% minuteAll %}
    | "*/" ([23456] | "10" | "12" | "15" | "20" | "30") {% minuteJump %}
    | [0-5]:? [0-9] "-" [0-5]:? [0-9] {% minuteRange %}
    | [0-5]:? [0-9] {% function(d) { return {minutes: [parseInt((d[0] | "") + d[1])]}; } %}

hours ->
      "*" {% hourAll %}
    | "*/" ([2346] | "12") {% hourJump %}
    | [0-5]:? [0-9] "-" [0-5]:? [0-9] {% hourRange %}
    | [0-5]:? [0-9] {% function(d) { return {hours: [parseInt((d[0] | "") + d[1])]}; } %}

_ -> [ \t]:+ {% function(d) { return null; } %}

@{%

function jumpRange(maxNum, step) {
    let output = [];

    step = step || 1;
    step = (step < 1) ? 1 : step;

    for (let i = 0; i < maxNum; i += step) {
        output.push(i);
    }

    return output;
}

function numRange(minNum, maxNum) {
    let output = [];

    for (let i = minNum; i <= maxNum; ++i) {
        output.push(i);
    }

    return output;
}

////////////////////////////////////////////////////////////////
function minuteAll(d) {
    return {minutes: jumpRange(60)};
}

function minuteJump(d) {
    let step = parseInt(d[1]);

    return {minutes: jumpRange(60, step)};
}

function minuteRange(d, l, reject) {
    let minNum = parseInt((d[0] | "") + d[1]);
    let maxNum = parseInt((d[3] | "") + d[4]);

    if (maxNum <= minNum) {
        return reject;
    }

    return {minutes: numRange(minNum, maxNum)};
}
////////////////////////////////////////////////////////////////
function hourAll(d) {
    return {hours: jumpRange(24)};
}

function hourJump(d) {
    let step = parseInt(d[1]);

    return {hours: jumpRange(24, step)};
}

function hourRange(d, l, reject) {
    let minNum = parseInt((d[0] | "") + d[1]);
    let maxNum = parseInt((d[3] | "") + d[4]);

    if (maxNum <= minNum) {
        return reject;
    }

    return {hours: numRange(minNum, maxNum)};
}
////////////////////////////////////////////////////////////////
function cronFunc(d) {
    return {
        cron: {
            minutes: d[0].minutes,
            hours: d[2].hours
        }
    }
}

%}
