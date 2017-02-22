.PHONY: all compile test generate graph

all: compile test generate graph

compile:
	nearleyc json.ne -o json.js

test:

generate:
	nearley-unparse -n 10 json.js

graph:
	nearley-railroad json.ne -o json.html
