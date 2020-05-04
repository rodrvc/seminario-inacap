const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TareasSchema = new Schema({
    firtsName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,

    },
    job: {
        type: String,
        required: true,
    },
    salary: {
        type: Number,
        required: false,
    },
});

module.exports = mongoose.model('Tarea', TareasSchema );
