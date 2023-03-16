const router = require('express').Router();
const ControladorTareas = require('./../controladores/tareas');
const Tarea = require('./../modelos/tarea');

router.get('', ControladorTareas.listar);

router.get('/:id', ControladorTareas.consultarId);

router.post('', ControladorTareas.postTarea);

router.put('/:id', ControladorTareas.putTarea);

router.delete('/:id', ControladorTareas.deleteTarea);

module.exports = router;