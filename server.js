"mongodb+srv://mike0727:mike0727%40%40@cluster0.ckgaiem.mongodb.net/Reja";
const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
"mongodb+srv://mike0727:mike0727%40%40@cluster0.ckgaiem.mongodb.net/Reja";
  

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT} http://localhost:${PORT}`
        );
      });
    }
  }
);
