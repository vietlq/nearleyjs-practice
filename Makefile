.PHONY: all compile test generate graph

all: compile test generate graph

compile:
	make -C csscolor compile
	make -C parentheses compile
	make -C markdown compile
	make -C image_proc compile
	make -C classic_crontab compile
	make -C json compile

test:
	make -C csscolor test
	make -C parentheses test
	make -C markdown test
	make -C image_proc test
	make -C classic_crontab test
	make -C json test

generate:
	make -C csscolor generate
	make -C parentheses generate
	make -C markdown generate
	make -C image_proc generate
	make -C classic_crontab generate
	make -C json generate

graph:
	make -C csscolor graph
	make -C parentheses graph
	make -C markdown graph
	make -C image_proc graph
	make -C classic_crontab graph
	make -C json graph
