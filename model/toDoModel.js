const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {type:String, required: [true,'Title Required']},
    description: {
        type: String,
        minLength: [6,'Minimum 6 characters'],
        maxLength: [100,'maximum 100 characters']
    },
    createdDate: {type: Date},
    status: {type: String, required: [true,'Status field is mandatory']}
});

module.exports = mongoose.model('todo',schema);