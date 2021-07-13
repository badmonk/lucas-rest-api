const UserModel = require('../../api/models/users.model');
const crypto = require('crypto');

exports.hasAuthValidFields = (req, res, next) => {
    let errors = [];

    if (req.body) {
        if (!req.body.username) {
            errors.push('Missing username field');
        }

        if (errors.length) {
            return res.status(400).send({errors: errors.join(',')});
        } else {
            return next();
        }
    } else {
        return res.status(400).send({errors: 'Missing username fields'});
    }
};

exports.isUserExists = (req, res, next) => {
    UserModel.findByUserName(req.body.username)
        .then((user)=>{
            if(!user[0]){
                res.status(404).send({error: "User not found."});
            }else{
                req.body = {
					Id: user[0]._id,
					emailAddress: user[0].emailAddress,
					identityNumber: user[0].identityNumber,
					accountNumber: user[0].accountNumber,
					userName: user[0].userName,
				};
				return next();
            }
        });
};