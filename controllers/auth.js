const User = require("../models/User")

const bcrypt = require("bcrypt");
const salt = 10;

// HTTP GET - Sign up route - to load the signup form

exports.auth_signup_get = (req,res) => {
    res.render("auth/signup");
}

// POST New User on Signup

exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);

    console.log("Password (as entered):", req.body.password);
    
    let hashedPass = bcrypt.hashSync(req.body.password, salt);
    console.log("Password (after hash):", hashedPass);

    user.save()
    .then(() => {
        res.redirect("/auth/login");
    })
    .catch((err) => {
        console.log(err);
        res.send("Registration failed; try again later.")
    })
}