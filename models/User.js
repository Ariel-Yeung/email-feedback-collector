const mongoose = require('mongoose');
const { Schema } = mongoose;     // same as const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleID: String
});

mongoose.model('users', userSchema);   // create new collection called 'users'. If exist, will not override



