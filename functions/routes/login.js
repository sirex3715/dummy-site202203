const express = require("express");
const router = express.Router();
const session = require('express-session');
const bodyParser = require('body-parser');
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

/*
var serviceAccount = require("../dummy-site01-firebase-adminsdk-19m3k-e13163bf84.json");

initializeApp({
  credential: cert(serviceAccount)
});
*/

// const db = getFirestore();

router.get("/", (req, res, next) => {
    var data = {
        title: "Login"
    };
    res.render("login", data)
});

router.post("/", async(req, res, next) => {
    /*
    const ml = req.body.mail;
    const pw = req.body.pass;

    const usersRef = db.collection("user");
    const user = await usersRef.where("mail", "==", ml).get();
    if (user.empty) {
        console.log("ログイン失敗");
        res.redirect("/login");
    } else {
        console.log(user.data())
    }
    */

    res.redirect("/");
})

module.exports = router;