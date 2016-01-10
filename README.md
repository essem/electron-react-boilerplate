# electron-react-boilerplate

A boilerplate for building a React-Electron app.
Converted from  [webpack-express-boilerplate](
https://github.com/christianalfoni/webpack-express-boilerplate)

## Run

Install node modules.

Example with docker.

```bash
docker run -it --rm -v ${PWD}:/src node:5.1.1 sh -c "cd /src && npm install"
```
For production mode, build bundle.

Example with docker.

```bash
docker run -it --rm -v ${PWD}:/src -e NODE_ENV=production node:5.1.1 sh -c "cd /src && npm run build"
```

Run with electron in project root directory.

```bash
${ELECTRON_PATH}/electron .
```
