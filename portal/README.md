# Portal - WEB APPLICATION

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

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4242/`. The app will automatically reload if you change any of the source files.

```
cd portal/
npm start
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

or with Docker -> [`deploy`](./../deploy)


```
cd portal/
ng build
node --max_old_space_size=8192 node_modules/@angular/cli/bin/ng build
```
