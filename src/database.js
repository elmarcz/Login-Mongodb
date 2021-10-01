const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes-db-app')
    .then(db => console.log('Database is conected'))
    .catch(err => console.error(err))
