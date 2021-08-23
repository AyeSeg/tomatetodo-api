const mongoose = require('mongoose');
const uri = "mongodb+srv://AyeSegovianoPWI:RNHVgiBi7hx5TiP@clusteraspwi.zfdy2.mongodb.net/tomate-todo?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});