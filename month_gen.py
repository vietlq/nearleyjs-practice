monthsLit = '"JAN" | "FEB" | "MAR" | "APR" | "MAY" | "JUN" | "JUL" | "AUG" | "SEP" | "OCT" | "NOV" | "DEC"'
months = monthsLit.split('|')
months = [month.replace('"', '').strip() for month in months]

count, output = 1, ''
for month in months:
    line = '    | '
    for c in month:
        line += "[%s%c] " % (str(c).lower(), c)
    line += '{%% function(d) { return %d; } %%}\n' % count
    output += line
    count += 1

print(output)
