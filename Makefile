.PHONY: all compile test generate graph

all: compile test generate graph

compile:
	nearleyc csscolor.ne -o csscolor.js
	nearleyc parentheses.ne -o parentheses.js

test:
	nearley-test -i "#00ff00" csscolor.js
	nearley-test -i "()" parentheses.js
	nearley-test -i "(())" parentheses.js
	nearley-test -i "(()())" parentheses.js
	nearley-test -i "(()()((())))" parentheses.js

generate:
	nearley-unparse -n 10 csscolor.js
	#nearley-unparse -n 10 parentheses.js

graph:
	nearley-railroad csscolor.ne -o csscolor.html
	nearley-railroad parentheses.ne -o parentheses.html
