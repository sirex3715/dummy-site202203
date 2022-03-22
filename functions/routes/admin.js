const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
    var data = {
        title: "Login",
        content: "これはサンプルページです"
    };
    res.render("login", data)
});

module.exports = router;