import * as functions from "firebase-functions";

import * as admin from "firebase-admin";

import * as express from "express";

import * as cors from "cors";


// admin database to make change to any resource on firebase platform
admin.initializeApp();

export const basicHTTP = functions.https.onRequest((req, res) => {
  // parsing the incoming request
  const name = req.query.name;

  if (!name) {
    res.status(400).send("Error! You must supply a name for the app");
  }

  // sending response from a function
  res.send(`Hello ${name}`);
});

// const auth = (req: any, res: any, next:any) => {
//   if (!req.header.authorization) {
//     res.status(400).send("unauthorized");
//   }
//   next();
// };

const app = express();


// middlewares
app.use(cors({origin: true}));
// app.use(auth);

app.get("/cat", (req, res) => {
  res.send("CAT");
});


app.get("/dog", (req, res) => {
  res.send("DOG");
});

export const api = functions.https.onRequest(app);

