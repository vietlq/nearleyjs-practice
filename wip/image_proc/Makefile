.PHONY: all compile test generate graph

all: compile test generate graph

compile:
	nearleyc image_proc.ne -o image_proc.js

test:

generate:
	nearley-unparse -n 10 image_proc.js

graph:
	nearley-railroad image_proc.ne -o image_proc.html
