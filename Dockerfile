from node:12

WORKDIR /usr/src/app

RUN apt-get update && \
	apt-get install --assume-yes git && \
	git clone https://github.com/natin56y/Dockerfile-Test

WORKDIR Dockerfile-Test

RUN npm install

EXPOSE 3000

CMD ["node","server.js"]
