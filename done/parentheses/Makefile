.PHONY: all compile test generate graph

all: compile test generate graph

compile:
	nearleyc parentheses.ne -o parentheses.js

test:
	nearley-test -i "()" parentheses.js
	nearley-test -i "(()())" parentheses.js
	# This will not fail, but the parse result will be empty: []
	nearley-test -i "((((())))(())()" parentheses.js
	nearley-test -i "[(((<>)()({})())(()())(())[])]" parentheses.js
	nearley-test -i "<<[([])]>([(<>[]{}{}<>())[{}[][]{}{}[]<>[]{}<>{}<>[]<>{}()][[][][]()()()]({})<[]>{(){}()<>}(<>[])]())({})>" parentheses.js

generate:

graph:
	nearley-railroad parentheses.ne -o parentheses.html
