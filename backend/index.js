import express from "express";
import bodyParser from "body-parser";
import routes from "./app/routes";
// import { User } from "./app/models";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use("/", routes);

// app.get("/", (request, response) => {
//   response.json({ info: "Node.js, Express, and Postgres API" });
// });

// app.get("/users", async (req, response) => {
//   const users = await User.findAll();
//   response.json(users);
// });
// app.post("/users", async (request, response) => {
//   const user = await User.create(request.body);
//   response.json(user);
// });

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
