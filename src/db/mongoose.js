const mongoose = require('mongoose');
//const uri = "mongodb+srv://AyeSegovianoPWI:RNHVgiBi7hx5TiP@clusteraspwi.zfdy2.mongodb.net/tomate-todo?retryWrites=true&w=majority";

mongoose.connect('mongodb://127.0.0.1:27017/tomate-todo', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});