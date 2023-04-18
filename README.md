<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar repositorio
2. Ejecutar
```
npm i / npm install
```
3. Tener Nest CLI instaladado

```
npm i @nestjs/cli
```

4. Levantar la base de datos

```
docker-compose up -d
```
5. Clonar el archivo ```.env.template``` y reenombrar la copia a ```.env```

6. Llenar las variables de entornos definidas en el archivp creado ```.env```


7. Ejecutar la aplicacion en modo desarrollo
```
npm run start:dev
```

8. Reconstruir DB con seed

```
http://localhost:/api/v1/seed
```


## Stack usado

* MongoDB
* Nestjs