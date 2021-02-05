const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    name: String,
    url: String,
    caption: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', NoteSchema);