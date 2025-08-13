const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/sit725db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

module.exports = mongoose;
