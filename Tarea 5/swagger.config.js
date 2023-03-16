const port = process.env.PORT || 3000;

module.exports = {
    swaggerDefinition: {
        swagger: '2.0',
        info: {
            title: 'API de Tareas',
            description: 'API para administrar tareas',
            version: '1.0.0',
            servers: ['http://localhost:' + port]
        },
        paths: {
            "/tareas": {
                "get": {
                    "summary": "Obtener todas las tareas",
                    "description": "Devuelve una lista de todas las tareas.",
                    "responses": {
                        "200": {
                            "description": "Lista de tareas devuelta correctamente"
                        },
                        "400": {
                            "description": "Error al intentar devolver la lista de tareas"
                        }
                    }
                },
                "post": {
                    "summary": "Crear una tarea",
                    "description": "Devuelve la tarea que se creo",
                    "responses": {
                        "200": {
                            "description": "tarea creada"
                        },
                        "400": {
                            "description": "Error al crear y devolver dicha tarea"
                        }
                    }
                }
            },
            "/tareas/:id": {
                "get": {
                    "summary": "Obtener una tarea",
                    "description": "Devuelve una tarea especifica dependiendo del id",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "ID de la tarea a obtener.",
                            "required": true,
                            "schema": {
                                "type": "string",
                                "format": "ObjectId"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "tarea del id devuelta correctamente"
                        },
                        "400": {
                            "description": "Error al intentar devolver la tarea"
                        }
                    }
                },
                "put": {
                    "summary": "Actualizar una tarea por id",
                    "description": "Actualiza y devuelve la tarea que se actulizo dependiendo del id",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "ID de la tarea a actualizar",
                            "required": true,
                            "schema": {
                                "type": "string",
                                "format": "ObjectId"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "actuliza y devuelve la tarea"
                        },
                        "400": {
                            "description": "Error al intentar actulizar la tarea"
                        }
                    }
                },
                "delete": {
                    "summary": "Borrar una tarea",
                    "description": "Borra y devuelve una tarea dependiendo del id",
                    "parameters": [
                        {
                            "name": "id",
                            "in": "path",
                            "description": "ID de la tarea a eliminar",
                            "required": true,
                            "schema": {
                                "type": "string",
                                "format": "ObjectId"
                            }
                        }
                    ],
                    "responses": {
                        "200": {
                            "description": "borra una tarea"
                        },
                        "400": {
                            "description": "Error al intentar borrar la tarea"
                        }
                    }
                }
            }
        }
    },
    apis: ['src/rutas/**/*.js']
}