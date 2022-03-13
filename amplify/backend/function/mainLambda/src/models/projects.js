const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    name: String,
    email: String,
    password: String
})

module.exports = mongoose.model('Project', ProjectSchema);