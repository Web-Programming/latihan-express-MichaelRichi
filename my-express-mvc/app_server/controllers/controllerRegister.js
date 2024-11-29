const Register = require("../models/register");

const Index = async (req, res) => {
    try{
        const register = await Register.find({});
        res.status(200).json(register);
        if(!register){
            res.status(404).json({ message: "Collection is Empty"});
        }
    }catch (error) {
        res.status(500).json({ message: "Error retrieving users", error});
    }
};

const Insert = (req, res, next) => {
    const register = new Register({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    });
  
    register
        .save()
        .then((result) => {
            const responseMessage = result;
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: e
            };
            res.status(400).json(responseMessage);
        });
};


module.exports = { Index, Insert}