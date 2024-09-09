cron :
programa tareas para ejecutar en intervalos de tiempo
# https://www.udemy.com/course/nodejs-de-cero-a-experto/learn/lecture/39557550#questions/21446420

```
DOCUMENTACION ARA USO DE DOCKER AQUI Y EN EL YML
```

documentacion para uso de mongo en docker:
# https://hub.docker.com/_/mongo
--$ docker pull mongo

## levantar la img, Me da acceso a mi base de mongo con docker:

# comndo para lebantar la imgen de docker!
docker compose up

# comndo para lebantar la imgen de docker(de forma detach)!
## desligo de la terminal para que se mantenga funcional sin la terminal:
docker compose up -d

## para detener vamos dockerDesktop:
 --> En contenedores:
Delete y eso elimina los contenedores(NO recupera la imagen del espacio de mongo)

 --> En imagenes:
borramos la imagen de mongo(aqui SI no quita la imagen de mongo)mongo

## PERMITE USAR LOS METODOS DE MONGO
https://mongoosejs.com/