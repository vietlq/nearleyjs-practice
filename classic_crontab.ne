statement -> minutes _ hours _ daysOfMonth {% cronFunc %}

minutes ->
      "*" {% minuteAll %}
    | "*/" ([23456] | "10" | "12" | "15" | "20" | "30") {% minuteJump %}
    | minute "-" minute {% minuteRange %}
    | minute ("," minute):* {% minuteList %}

hours ->
      "*" {% hourAll %}
    | "*/" ([23468] | "12") {% hourJump %}
    | hour "-" hour {% hourRange %}
    | hour ("," hour):* {% hourList %}

daysOfMonth ->
      "*" {% allDaysOfMonth %}
    | "*/" ([2356] | "10" | "15") {% dayOfMonthJump %}
    | dayOfMonth "-" dayOfMonth {% dayOfMonthRange %}
    | dayOfMonth ("," dayOfMonth):* {% dayOfMonthList %}

minute -> [0-5]:? [0-9] {% minute %}

hour -> ([01]:? [0-9] | "2" [0-3]) {% hour %}

dayOfMonth -> ("0":? [1-9] | [12] [0-9] | "3" [01]) {% dayOfMonth %}

_ -> [ \t]:+ {% function(d) { return null; } %}

@{%

function toInt(n) {
    return parseInt(n);
}

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
function minute(d) {
    return parseInt((d[0] | "") + d[1]);
}

function minuteAll(d) {
    return {minutes: jumpRange(60)};
}

function minuteJump(d) {
    let step = parseInt(d[1]);

    return {minutes: jumpRange(60, step)};
}

function minuteRange(d, l, reject) {
    let minNum = d[0];
    let maxNum = d[2];

    if (maxNum <= minNum) {
        return reject;
    }

    return {minutes: numRange(minNum, maxNum)};
}

function minuteList(d) {
    let dict = {};
    dict[d[0]] = true;

    for (let i in d[1]) {
        dict[d[1][i][1]] = true;
    }
    return {minutes: Object.keys(dict).map(toInt)};
}
////////////////////////////////////////////////////////////////
function hour(d) {
    return parseInt((d[0][0] || "") + d[0][1]);
}

function hourAll(d) {
    return {hours: jumpRange(24)};
}

function hourJump(d) {
    let step = parseInt(d[1]);

    return {hours: jumpRange(24, step)};
}

function hourRange(d, l, reject) {
    let minNum = d[0];
    let maxNum = d[2];

    if (maxNum <= minNum) {
        return reject;
    }

    return {hours: numRange(minNum, maxNum)};
}

function hourList(d) {
    let dict = {};
    dict[d[0]] = true;

    for (let i in d[1]) {
        dict[d[1][i][1]] = true;
    }
    return {hours: Object.keys(dict).map(toInt)};
}
////////////////////////////////////////////////////////////////
function plusN(n) {
    return function(i) {
        return n + i;
    }
}

function upToN(n) {
    return function(i) {
        return i <= n;
    }
}

function dayOfMonth(d) {
    return parseInt((d[0][0] || "") + d[0][1]);
}

function allDaysOfMonth(d) {
    return {daysOfMonth: jumpRange(31).map(plusN(1))};
}

function dayOfMonthJump(d) {
    let step = parseInt(d[1]);

    return {daysOfMonth: jumpRange(31, step).map(plusN(step)).filter(upToN(31))};
}

function dayOfMonthRange(d, l, reject) {
    let minNum = d[0];
    let maxNum = d[2];

    if (maxNum <= minNum) {
        return reject;
    }

    return {daysOfMonth: numRange(minNum, maxNum)};
}

function dayOfMonthList(d) {
    let dict = {};
    dict[d[0]] = true;

    for (let i in d[1]) {
        dict[d[1][i][1]] = true;
    }
    return {daysOfMonth: Object.keys(dict).map(toInt)};
}
////////////////////////////////////////////////////////////////
function cronFunc(d) {
    return {
        cron: {
            minutes: d[0].minutes,
            hours: d[2].hours,
            daysOfMonth: d[4].daysOfMonth
        }
    }
}

%}
