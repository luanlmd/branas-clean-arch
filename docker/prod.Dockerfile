FROM node:14-alpine

WORKDIR /src

COPY package.json /src/
COPY yarn.lock /src/

RUN yarn install

ADD . /src

RUN set -x \
  && yarn build

RUN set -x \
  && yarn test --coverage

RUN set -x \
  && yarn install --production --force

FROM node:14-alpine

COPY --from=0 /src/dist /src
COPY --from=0 /src/node_modules /src/node_modules
COPY --from=0 /src/package.json /src/package.json

WORKDIR /src

CMD node /src/index.js