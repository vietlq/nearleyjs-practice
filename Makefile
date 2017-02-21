.PHONY: all compile test generate graph

all: compile test generate graph

compile:
	nearleyc csscolor.ne -o csscolor.js
	nearleyc parentheses.ne -o parentheses.js
	nearleyc markdown.ne -o markdown.js
	nearleyc image_proc.ne -o image_proc.js
	nearleyc classic_crontab.ne -o classic_crontab.js

test:
	nearley-test -i "#00ff00" csscolor.js
	nearley-test -i "()" parentheses.js
	nearley-test -i "(())" parentheses.js
	nearley-test -i "(()())" parentheses.js
	nearley-test -i "(()()((())))" parentheses.js

generate:
	nearley-unparse -n 10 csscolor.js
	#nearley-unparse -n 10 parentheses.js
	nearley-unparse -n 10 markdown.js
	nearley-unparse -n 10 image_proc.js
	nearley-unparse -n 10 classic_crontab.js

graph:
	nearley-railroad csscolor.ne -o csscolor.html
	nearley-railroad parentheses.ne -o parentheses.html
	nearley-railroad markdown.ne -o markdown.html
	nearley-railroad image_proc.ne -o image_proc.html
	nearley-railroad classic_crontab.ne -o classic_crontab.html
