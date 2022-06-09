.DEFAULT_GOAL := start

start:
	npm run dev
.PHONY:start

build:
	docker image build -t liara-docs --network=host .
.PHONY:build

run:
	docker container rm -f liara-docs
	docker container run -p 8080:80 --name=liara-docs liara-docs:latest
.PHONY:run