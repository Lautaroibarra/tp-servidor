# API REST con Express, MongoDB y Autenticación JWT

## Descripción

Este proyecto consiste en una API REST desarrollada con **Node.js**, **Express** y **MongoDB**, implementando autenticación mediante **JSON Web Tokens (JWT)** y siguiendo la arquitectura **MVC (Modelo - Vista - Controlador)**.

Cada usuario puede registrarse, iniciar sesión y administrar sus propias tareas, las cuales están protegidas mediante autenticación.

## Tecnologías utilizadas

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Token (JWT)
* bcrypt
* dotenv
* cors
* nodemon

## Arquitectura del proyecto

```
project/
│
├── src/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   │
│   ├── services/
│   │
│   └── app.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

## Instalación

1. Clonar el repositorio.

```bash
git clone <url-del-repositorio>
```

2. Entrar en la carpeta del proyecto.

```bash
cd nombre-del-proyecto
```

3. Instalar las dependencias.

```bash
npm install
```

4. Crear un archivo `.env` utilizando `.env.example` como referencia.

Ejemplo:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/nombre_base
JWT_SECRET=tu_clave_secreta
```

5. Iniciar el servidor.

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

---

# Endpoints

## Autenticación

### Registrar usuario

**POST**

```
/auth/register
```

Body:

```json
{
  "username": "lautaro",
  "email": "lautaro@email.com",
  "password": "123456"
}
```

Respuesta:

```json
{
  "token": "jwt_token"
}
```

---

### Iniciar sesión

**POST**

```
/auth/login
```

Body:

```json
{
  "email": "lautaro@email.com",
  "password": "123456"
}
```

Respuesta:

```json
{
  "token": "jwt_token"
}
```

---

## Tareas (protegidas)

Todas las siguientes rutas requieren enviar el token en el header:

```
Authorization: Bearer <token>
```

### Obtener tareas

**GET**

```
/games
```

---

### Crear tarea

**POST**

```
/games
```

Body:

```json
{
  "title": "Terminar TP",
  "completed": false
}
```

---

### Actualizar tarea

**PATCH**

```
/games/:id
```

Body:

```json
{
  "completed": true
}
```

---

### Eliminar tarea

**DELETE**

```
/games/:id
```

---

# Variables de entorno

El proyecto utiliza las siguientes variables:

```env
PORT=
JWT_SECRET=
URI_DB=
```

## Archivo `.env.example`

```env
PORT=3000
JWT_SECRET=your_secret_key
URI_DB=mongodb://localhost:27017/database_name
```

# Manejo de errores

La aplicación implementa un middleware centralizado para controlar errores y devolver respuestas consistentes al cliente.

Ejemplo:

```json
{
  "message": "Unauthorized"
}
```

# Pruebas

Se incluye una colección para probar los endpoints utilizando:

* Postman
* Thunder Client

Importar la colección y ejecutar las peticiones siguiendo el orden:

1. Register
2. Login
3. Copiar el token recibido
4. Utilizar el token para acceder a las rutas protegidas

# Funcionalidades

* Registro de usuarios
* Inicio de sesión
* Contraseñas encriptadas con bcrypt
* Autenticación mediante JWT
* Middleware de protección de rutas
* CRUD de tareas asociado al usuario autenticado
* Arquitectura MVC
* Conexión a MongoDB mediante Mongoose
* Variables de entorno con dotenv

# Autor

Proyecto desarrollado como trabajo práctico para la materia de Backend utilizando Express, MongoDB y autenticación JWT.
