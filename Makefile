compile:
	nearleyc csscolor.ne -o csscolor.js

test:
	nearley-test -i "#00ff00" csscolor.js

generate:
	nearley-unparse -n 10 csscolor.js

graph:
	nearley-railroad csscolor.ne -o csscolor.html
