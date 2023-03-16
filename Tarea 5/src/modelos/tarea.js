const { Schema, model } = require('mongoose');

const tareaSchema = new Schema({
    //_id: { type: Schema.Types.ObjectId },
    title: { type: String },
    description: { type: String},
    status: { type: String, default: 'new' },
    Date: { type: Date, default: Date.now }
});

module.exports = model('tareas', tareaSchema);