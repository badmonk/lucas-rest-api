// the api; the answer
const UserModel = require('../models/users.model');

exports.insert = (req, res) => {
    UserModel.createUser(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};

exports.list = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    UserModel.list(limit, page)
        .then((result) => {
            res.status(200).send(result);
        })
};

exports.getByAcNum = (req, res) => {
    UserModel.findByAccountNumber(req.params.userAccNum)
        .then((result) => {
            res.status(200).send(result);
        });
};
exports.getByIdNum = (req, res) => {
    UserModel.findByIdentityNumber(req.params.userIdNum)
        .then((result) => {
            res.status(200).send(result);
        });
};
exports.getById = (req, res) => {
    UserModel.findById(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.patchById = (req, res) => {
    UserModel.patchUser(req.params.userId, req.body)
        .then((result) => {
            res.status(204).send({});
        });

};

exports.removeById = (req, res) => {
    UserModel.removeById(req.params.userId)
        .then((result)=>{
            res.status(204).send({});
        });
};