const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://aanshu:Cr0mvolt1@cluster0.krl4ncn.mongodb.net/todo-list", { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/todo_list_db');
// mongoose.set("strictQuery", false);

const db = mongoose.connection;
// error
db.on('error', console.error.bind(console, 'erroe connecting to db'));
// up and running then message
db.once('open', function() {
    console.log('successfully connected to the database')
})