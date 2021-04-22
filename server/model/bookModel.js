const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSChema = new Schema({
    title: {
        type: String
    },
    author :{
        type: String
    },
    description:{
        type: String
    },
    image:{
        data: Buffer,
        contentType: String
    }
});


const books = mongoose.model("books", bookSChema);
module.exports = books;