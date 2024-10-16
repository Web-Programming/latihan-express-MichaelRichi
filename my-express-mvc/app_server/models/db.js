let mongoose = require("mongoose");
let dBuri = "mongodb://localhost:27017"

mongoose.connect(dBuri, {
    useNewURLParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error", (errror) => {
    console.log("Connection Error: " + error);
});

mongoose.connection.on("disconected", () => {
    console.log("Disconected From MongoDB");
});