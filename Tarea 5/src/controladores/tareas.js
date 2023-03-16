const Tarea = require('./../modelos/tarea');

class ControladorTareas{
    static listar(req, res){
        Tarea.find({}, null, { collection: 'tareas' }).lean()
            .then(tareas => {
                res.send(tareas);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }

    static consultarId(req, res){
       Tarea.findById(req.params.id).lean()
            .then(tareas => {
                res.send(tareas);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }    

    static postTarea(req, res){
        console.log(req.body);
        const tarea = new Tarea({
            _id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            Date: req.body.Date
        });
        tarea.save()
            .then(tareaGuardada => {
                res.send(tareaGuardada);
            })
            .catch(err => {
                res.sendStatus(400);
            });
    }

    static putTarea(req, res){
        Tarea.findByIdAndUpdate(req.params.id, req.body).lean()
            .then(tareas => {
                res.send(tareas);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }

    static deleteTarea(req, res){
        Tarea.findByIdAndDelete(req.params.id)
            .then(tareas => {
                res.send(tareas);
            })
            .catch(err => {
                res.sendStatus(400);
            })
    }
}

module.exports = ControladorTareas;