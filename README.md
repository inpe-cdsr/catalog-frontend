# DGI Catalog - INPE


## Structure

Folders:

- [`deploy`](./deploy): application deploy;

- [`docs`](./docs): portal documentation;

- [`portal`](./portal): web portal source code.

[`env.js`](./portal/src/assets/env.js) is an environment variables file. Inside this file, there are links to APIs that the portal uses.


## Installation

### Requirements

Make sure you have the following libraries installed:

- [`Node.js >= v12.14.1`](https://nodejs.org/en/)
- [`Angular CLI >= 8.3.3`](https://angular.io/)

Install the dependencies:

```
cd portal/
npm install
```

### Run a development server

Run a development server.

```
cd portal/
npm start
```

Navigate to `http://localhost:8000/catalogo`. The application will reload automatically if you change any of the source files.


### Run the application inside a Docker image

#### Development

You can build a new development Docker image to run the application inside the `docker-compose.dev.yml` on [docker-compose](https://github.com/dgi-catalog/docker-compose) repository with all other DGI Catalog services.

Build the development Docker image:

```
cd portal/
docker build -t inpe-cdsr-catalog-frontend -f dev.Dockerfile . --no-cache
```

#### Production

You can build a new production Docker image to run the application inside the `docker-compose.prod.yml` on [docker-compose](https://github.com/dgi-catalog/docker-compose) repository with all other DGI Catalog services.

Building the web portal. The built code below will be added inside the final image afterwards.

- Building in development mode:

```
cd portal/
npm run build -- --base-href /catalogo/
```

- Building in production mode:

```
cd portal/
npm run build -- --base-href /catalogo/ --prod
```

Build the production Docker image:

```
cd ../deploy/
docker build -t registry.dpi.inpe.br/dgi/catalog_app:0.2.6 -f prod.Dockerfile . --no-cache
```

You can send the image above to your registry:

```
docker push registry.dpi.inpe.br/dgi/catalog_app:0.2.6
```
