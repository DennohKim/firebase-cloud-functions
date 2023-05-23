import * as functions from 'firebase-functions';

import * as admin from "firebase-admin";

//admin database to make change to any resource on firebase platform
admin.initializeApp();

export const basicHTTP = functions.https.onRequest((req, res) => {
    //parsing the incoming request
    const name = req.query.name;

    if(!name) {
        res.status(400).send("Error! You must supply a name for the app")
    }

    //sending response from a function
    res.send(`Hello ${name}`)
})


