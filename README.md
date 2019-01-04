# Miki.Web.Frontend
The official repository for Miki.ai's frontend code. Collaborate and post issues here related to the current website version.

## Running with just parcel
Standard dev mode with built-in parcel webserver

1. `npm install`
2. `npm run dev`

## Building with docker + nginx
Big boy build with nginx, removing `.html` extensions from endpoints

Note: If you're not using `npm run build`, files must be compiled with
the `--public-url ./` flag to prevent anchors from linking to `/about.html` 
and have them link to `/about` instead

1. `npm install`
2. `npm run build`
3. `docker build -t miki .`
3. `docker run --name miki --publish 80:80 -d miki`
