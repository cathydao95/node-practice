const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

const people = {
  "cathy d": {
    age: 27,
    birthName: "Cathy D",
    birthLocation: "Fountain Valley, California",
  },
  "bryan d": {
    age: 17,
    birthName: "Bryan D",
    birthLocation: "Torrance, California",
  },
  "kaitlyn m": {
    age: 31,
    birthName: "Hien D",
    birthLocation: "Saigon, Vietnam",
  },
  other: {
    age: 5,
    birthName: "Other",
    birthLocation: "Other",
  },
};

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/api/:personName", (request, response) => {
  const personsName = request.params.personName.toLowerCase();
  if (people[personsName]) {
    response.json(people[personsName]);
  } else {
    response.json(people["other"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`The server is running on ${PORT}`);
});
