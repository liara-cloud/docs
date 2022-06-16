.DEFAULT_GOAL := build

prepare:
	[ -d node_modules ] || npm install
.PHONY:prepare

start: prepare
	npm run dev
.PHONY:start

build:
	docker image build -t liara-docs --network=host .
.PHONY:build

run:
	docker container rm -f liara-docs || true
	docker container run -d -p 8080:80 --name=liara-docs liara-docs:latest
	@echo "Liara-docs bind to: http://localhost:8080"
.PHONY:run