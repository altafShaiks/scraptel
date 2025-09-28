const userModel = require('../models/user.model');


module.exports.createUser = async ({
    fullname, email, phone, password
}) => {
    if(!fullname || !email || !phone || !password)
        throw new Error('All fields are required');

    const user = userModel.create({
        fullname,
        email,
        phone,
        password
    });
    return user;
}