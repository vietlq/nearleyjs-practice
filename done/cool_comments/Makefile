.PHONY: all compile test generate graph

all: compile test generate graph

compile:
	nearleyc cool_comments.ne -o cool_comments.js

test:
	nearley-test -i "(**)" cool_comments.js
	nearley-test -i "(*(**)*)" cool_comments.js
	nearley-test -i "(*(**)(**)*)" cool_comments.js
	nearley-test -i "(*((* )*)))*)" cool_comments.js
	nearley-test -i "(*(**)))(**)*)" cool_comments.js
	nearley-test -i "(*(*(#)*)_((((*(>)*)))))*)" cool_comments.js
	nearley-test -i "(*(*(**))()(((((((*((**)*)*)*)" cool_comments.js

generate:
	nearley-unparse -n 10 cool_comments.js

graph:
	nearley-railroad cool_comments.ne -o cool_comments.html
