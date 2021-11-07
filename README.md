# Dummy Social Network

Dummy social Network es un una demostración simple de una red social usando
una API que nos provee de datos falsos para su uso de demostración.

https://dummyapi.io/

implementaciones actuales:

- Inicio de sesión con Google y Github (Usando firebase)
- Rutas protegidas por autenticación
- Listado de Post en la página principal
- Listado de tags para filtrar los post
- Modal para mostrar el perfil del usuario creador de cada post
- Listado de comentarios de cada post

## Instalación

Clona el repositorio

`$ git clone url`

## Cómo se usa

Instalamos las dependencias con yarn

`yarn install`

Debemos crear una aplicación en firebase para la autenticacion externa
```javascript
// file -> src/firebaseConfig.js
// agregamos la configuración de firebase

apiKey: "/////",
authDomain: "////",
projectId: "////",
storageBucket: "////",
messagingSenderId: "////",
appId: "////"

```

Creamos un archivo .env en la raiz del proyecto para agregar nuestro API Key de dummyapi.io

`REACT_APP_DUMMY_API_APP_ID = YOUR_API_KEY`

Iniciamos el servidor de desarrollo

`yarn start`

Para compilar ejecutamos el comando build

`yarn build` 


## Cómo contribuir

Puedes crear un pull request al proyecto

## Licencia

MIT