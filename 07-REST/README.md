Documentacion: HTTP response status codes
BY: mozilla mdn
URL: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

Documentacion: The Movie Database (TMDB)  
api rest para obtener datos de un fetch:
https://developer.themoviedb.org/reference/intro/getting-started

Documentacion: prisma
api rest para obtener datos de un fetch:
https://www.prisma.io/

### =============> instalacion de .env 

$ npm install prisma --save-dev

$ npx prisma init --datasource-provider PostgreSQL

$ docker pull postgres

$ npx prisma migrate dev --name init

### =============> fin instalacion de .env 


## Jist: Production best practices: performance and reliability

### Express:

# URL: https://expressjs.com/en/advanced/best-practice-performance.html

example:

Utilice compresión gzip
La compresión Gzip puede reducir considerablemente el tamaño del cuerpo de la respuesta y, por lo tanto, aumentar la velocidad de una aplicación web. Utilice el middleware de compresión para la compresión Gzip en su aplicación Express. Por ejemplo:

=> ayuda a minimizar la respuestas!

=> simepre usar promesas

=> simepre usar try..

### Ej:

$ const compression = require('compression')
$ const express = require('express')
$ const app = express()
$ app.use(compression())

