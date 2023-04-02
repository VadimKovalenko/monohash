# monohash-vue3-docker

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
Check http://localhost:5173/

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Run local server

```sh
node app
```

# Migration:
Use PrimeVue (https://primevue.org/setup) instead of vue-material

# Docker setup
### Run docker instance

1. Build Docker image

    ```
    docker build -t monohash-docker .
    ```

2. Run Docker conatiner
    ```
    docker run -p 3000:3000 monohash-docker
    ```

    Visit application on `http://localhost:3000`

    📛 To stop container, run:
    ```
    docker ps
    docker stop <CONTAINER_ID>
    ```

3. If app will require env variable, pass it to the container using this command
    ```
    docker run -p 3000:3000 -e NODE_ENV=production monohash-docker
    ```

## Steps ##
1. Create frontend with tab panes first (Done)
2. Connect Decryption/Encryption components (Done)
3. Connect server side logic for the Decryption/Encryption (Done)
4. Apply built-in crypto module (Done)
5. Setup QR code feature (Todo)
6. Refactor error handling (Todo)
7. Prettify frontend (Todo)
8. Wrap application into Docker (Done)
