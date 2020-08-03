const fs = require("fs");
const os = require("os");

const sparkFilePath = os.homedir() + "/.spark.json";

const command = process.argv[2];

if (command == "create") {
  const idea = process.argv[3];
  console.log("... create a spark: " + idea);
} else if (command == "list") {
  // Read the .json file
  const fileContent = fs.readFileSync(sparkFilePath, "utf-8");

  // Convert the json string into an object
  const data = JSON.parse(fileContent);

  // console.log the sparks as a table
  console.table(data.ideas);
} else if (command == "extinguish") {
  const index = process.argv[3];
  console.log("... remove spark with index " + index);
} else {
  console.log("Print the help");
}
