# Web Portal - Deploy

## Installation
### Requirements

Make sure you have the following libraries installed:

- [`Node.js >= 8.x`](https://nodejs.org/en/)
- [`Angular CLI >= 7`](https://angular.io/)

```
cd ../portal && npm install
```

## Runnig

* firstly, configure the files in the `src/environments` folder.

```
cd ../portal && npm run build
cd ../deploy
docker build -t portal:0.0.1
```