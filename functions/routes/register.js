const express = require("express");
const router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
import { registerUser } from "./auth.js";

/*
var serviceAccount = require("../dummy-site01-firebase-adminsdk-19m3k-e13163bf84.json");

initializeApp({
  credential: cert(serviceAccount)
});
*/

// const db = getFirestore();

router.get("/", (req, res, next) => {
    var data = {
        title: "会員登録"
    };
    res.render("register", data)
});

router.post("/", async(req, res, next) => {
    const ml = req.body.mail;
    const nm = req.body.name;
    const pw = req.body.pass;

    const result = registerUser(ml, pw);
    console.log(result);
    
    res.redirect("/");
})

module.exports = router;