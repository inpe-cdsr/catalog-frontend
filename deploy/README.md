# Web Portal - Deploy

## Installation

### Requirements

Make sure you have the following libraries installed:

- [`Node.js >= 8.x`](https://nodejs.org/en/)
- [`Angular CLI >= 7`](https://angular.io/)

```
cd ../portal && npm install
```


## Build a new Docker image

Development:

```
cd ../portal
docker build -t dgi-catalog-frontend:0.0.8 -f dev.Dockerfile . --no-cache
```

Production:

```
cd ../portal && npm run build
cd ../deploy
docker build -t registry.dpi.inpe.br/dgi/dgi-catalog-frontend:0.0.8 .
```
