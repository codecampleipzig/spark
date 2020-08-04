#! /usr/bin/env node
const spark = require("./spark.js");

const command = process.argv[2];

if (command == "create") {
  spark.create(process.argv[3]);
} else if (command == "list") {
  spark.list();
} else if (command == "extinguish" || command == "remove") {
  spark.remove(Number(process.argv[3]));
} else {
  console.log("Print the help");
}
