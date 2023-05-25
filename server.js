const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString =
'mongodb+srv://mike0727:mike0727%40%40@cluster0.rrqr1xh.mongodb.net/Reja'
//"mongodb+srv://mike0727:mike0727@@@cluster0.rrqr1xh.mongodb.net/?retryWrites=true&w=majority";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection Mongodb");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = process.env.PORT || 3002;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);