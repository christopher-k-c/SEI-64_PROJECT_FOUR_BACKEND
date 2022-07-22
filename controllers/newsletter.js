
const NewsLetter = require("../models/NewsLetter")



// PRODUCT POST - CREATE
exports.newsletter_add_post = (req, res) => {
    
    let newsletter = new NewsLetter(req.body);

    newsletter.save()
    .then((newsletter) => {

        res.json({newsletter})
    })
    .catch((err) => {
        console.log(err);
        res.send("Sorry, please try and sign up again...");
    })
}