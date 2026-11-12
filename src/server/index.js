require("dotenv").config();
const app = require("../app/app");

const port = process.env.PORT;
const base_url = process.env.BASE_URL;

app.listen(port, () =>
  console.log(`App is running successfully on ${base_url}`),
);
