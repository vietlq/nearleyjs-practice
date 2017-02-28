.PHONY: all compile test generate graph

all: compile test generate graph

compile:
	make -C done/classic_crontab compile
	make -C done/csscolor compile
	make -C done/json compile
	make -C done/parentheses compile
	make -C wip/image_proc compile
	make -C wip/markdown compile

test:
	make -C done/classic_crontab test
	make -C done/csscolor test
	make -C done/json test
	make -C done/parentheses test
	make -C wip/image_proc test
	make -C wip/markdown test

generate:
	make -C done/classic_crontab generate
	make -C done/csscolor generate
	make -C done/json generate
	make -C done/parentheses generate
	make -C wip/image_proc generate
	make -C wip/markdown generate

graph:
	make -C done/classic_crontab graph
	make -C done/csscolor graph
	make -C done/json graph
	make -C done/parentheses graph
	make -C wip/image_proc graph
	make -C wip/markdown graph
