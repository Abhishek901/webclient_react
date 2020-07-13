const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
process.env.NODE_ENV == "production";

const indexHTML = (() => {
  return fs.readFileSync(path.resolve(__dirname, "./dist/index.html"), "utf-8");
})();

//app.use('/dist', express.static(path.resolve(__dirname, './dist')))

console.log(process.env.NODE_ENV);
app.use("/", express.static(path.resolve(__dirname, "./dist")));
app.use("/src", express.static(path.resolve(__dirname, "./src")));

// if (isProd) {
//   console.log("in production mode");
//   const bundlePath = path.resolve(__dirname, "./dist/server/main.js");
// } else {
//   require("./build/dev-server")(app);
// }
app.get("/", (req, res) => {
  res.write(indexHTML);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
