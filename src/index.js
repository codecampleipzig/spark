#! /usr/bin/env node
const fs = require("fs");
const os = require("os");

const sparkFilePath = os.homedir() + "/.spark.json";
const loadSparkFile = function () {
  // Read the .json file
  const fileContent = fs.readFileSync(sparkFilePath, "utf-8");

  // Convert the json string into an object and return it
  return JSON.parse(fileContent);
};

const command = process.argv[2];

if (command == "create") {
  // Read the sparks from the file
  const data = loadSparkFile();

  // Add our new spark to the ideas array
  data.ideas.push({
    idea: process.argv[3],
  });

  // Convert the data object into a JSON string
  const fileContent = JSON.stringify(data);
  // Write the JSON string again into the file
  fs.writeFileSync(sparkFilePath, fileContent);
} else if (command == "list") {
  const data = loadSparkFile();

  // console.log the sparks as a table
  console.table(data.ideas);
} else if (command == "extinguish") {
  const index = process.argv[3];
  console.log("... remove spark with index " + index);
} else {
  console.log("Print the help");
}
