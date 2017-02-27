.PHONY: all compile test generate graph

all: compile test generate graph

compile:
	nearleyc markdown.ne -o markdown.js

test:

generate:
	nearley-unparse -n 10 markdown.js

graph:
	nearley-railroad markdown.ne -o markdown.html
