const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/intern_assignment_dev');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to the database'));
db.once('open', () => {
    console.log('database successfully connected');
});
module.exports = db;