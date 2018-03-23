// Dependencies
// =============================================================
const db = require("../models");

// Routes
// =============================================================
module.exports = app => {

    app.get("/", (req, res) => {
        db.Article
            .find({})
            .then(dbArt => {
                if (dbArt) {
                    const hbsObject = {
                        articles: dbArt
                    };
                res.render("home", hbsObject);
                } else {
                    res.render("home");
                }
            }).catch(err => {
                // If an error occurs, send the error back to the client
                res.json(err);
            });
    });
};