const { validationResult, body } = require('express-validator');

//Express validation Error Handling
const validatorRequestSchema = (req, res, next) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({success, errors: errors.array() });
    }
    next();
}



//Express validation schema validation
const creaateUserSchema = [
    body('username', "Enter a valid User Name").isLength({min: 3}),
    body('name', "Enter a valid Fullname").isLength({min: 3}),
    body('email', "Enter a valid email address").isEmail(),
    body('number', "Enter a valid email address").isLength({min: 12}),
    body('password', "Enter a valid password").isLength({min: 5}),
]

const loginSchema = [
    body('email', "Enter a valid email address").isEmail(),
    body('password', "Enter a valid password").isLength({min:5})
]








module.exports  = {
    creaateUserSchema,
    loginSchema,
    validatorRequestSchema
}

