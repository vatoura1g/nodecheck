const fs = require("fs");
const path = require("path");
const route = process.argv[2];
const ext = process.argv[3];

fs.readdir(route, "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    for (let i = 0; i < data.length; i++) {
        if (path.extname(data[i]) === "." + ext) {
            console.log(data[i]);
        }
    }
});
