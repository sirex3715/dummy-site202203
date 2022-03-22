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

const db = getFirestore();

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

    const userRes = await db.collection("user").add({
        mail: ml,
        name: nm,
        pass: pw,
        point: 0
    })

    console.log('Added document with ID: ', userRes.id);

    req.session.regenerate((err) => {
        //req.session.username = nm;
        req.session.userid = userRes.id;
        res.redirect('/');
    });

    // res.redirect("/");
})

module.exports = router;