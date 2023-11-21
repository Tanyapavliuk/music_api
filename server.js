const mongoose = require("mongoose");
const app = require("./app");

const { BD_HOST } = process.env;
console.log(process.env.BD_HOST);

mongoose
  .connect(BD_HOST)
  .then(() => {
    app.listen(5000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err), process.exit(1);
  });
