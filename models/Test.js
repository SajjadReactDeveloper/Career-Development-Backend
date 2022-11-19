const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    university: {
        type: String,
        trim: true,
        required: true,
    },
    questions: [],
}, {
    timestamps: true
})

module.exports = mongoose.model('Test', testSchema)