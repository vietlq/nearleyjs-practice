.PHONY: all compile test generate graph

all: compile test generate graph

compile:
	nearleyc classic_crontab.ne -o classic_crontab.js

test:

generate:
	nearley-unparse -n 10 classic_crontab.js

graph:
	nearley-railroad classic_crontab.ne -o classic_crontab.html
