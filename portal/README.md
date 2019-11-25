# Portal - WEB APPLICATION

- [`Basic architecture`](./../docs/BDC%20Arquitecture%20-%20Master_Details.jpg)
- [`Documentation`](./../docs)


## Installation
### Requirements

Make sure you have the following libraries installed:

- [`Node.js >= 8.x`](https://nodejs.org/en/)
- [`Angular CLI >= 7`](https://angular.io/)

```
npm install
```


## Running

* firstly, configure the files in the `src/environments` folder.


### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4242/`. The app will automatically reload if you change any of the source files.

```
cd portal/
npm start
```


## Build

Run the following script to build a new Docker image with the portal:

```
sh build.sh
```

The script will ask you to input a new tag related to the generated image, hence choose one.

When the script stops executing, it will push the new image to the registry.

On the server, restart the docker-compose by building the portal image again:

```
docker-compose up -d --build
```
