#!/usr/bin/env python

MONTHS_LIST = '"JAN" | "FEB" | "MAR" | "APR" | "MAY" | "JUN" | "JUL" | "AUG" | "SEP" | "OCT" | "NOV" | "DEC"'
WDAY_LIST = '"SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT"'

def generate(alist, start=0):
    newList = alist.split('|')
    newList = [item.replace('"', '').strip() for item in newList]

    count, output = start, ''
    for item in newList:
        line = '    | '
        for c in item:
            line += "[%s%c] " % (str(c).lower(), c)
        line += '{%% function(d) { return %d; } %%}\n' % count
        output += line
        count += 1

    return output

print(generate(alist=MONTHS_LIST, start=1))
print(generate(alist=WDAY_LIST, start=0))
