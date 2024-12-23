const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    firstname: { 
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
});

const Register = mongoose.model('Register', registerSchema);
module.exports = Register;