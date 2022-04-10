const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");

//Settings
app.set("port", 3005);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors("*"));

//Routes
app.use("/falabella/primos/", require("./routes/primos.routes"));
// post: localhost:3005/falabella/primos/primosByNumber - recibe { "number" : x }

//Starting the Server
app.listen(app.get("port"), () => {
  console.log("server", app.get("port"));
});

// pruebas unitarias en folder test
// correr npm run dev para api
// correr npm test para test unitario (necesita otra terminal)
