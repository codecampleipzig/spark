const fs = require("fs");
const os = require("os");

const sparkFilePath = os.homedir() + "/.spark.json";

const loadSparkFile = function () {
  try {
    const fileContent = fs.readFileSync(sparkFilePath, "utf-8");

    return JSON.parse(fileContent);
  } catch (error) {
    return {
      ideas: [],
    };
  }
};

const storeSparkFile = function (data) {
  // Convert the data object into a JSON string
  const fileContent = JSON.stringify(data);
  // Write the JSON string again into the file
  fs.writeFileSync(sparkFilePath, fileContent);
};

const createSpark = function (idea) {
  const data = loadSparkFile();

  // Add our new spark to the ideas array
  data.ideas.push({
    idea: idea,
  });

  storeSparkFile(data);
  listSparks();
};

const listSparks = function () {
  const data = loadSparkFile();

  // console.log the sparks as a table
  console.table(data.ideas);
};

const removeSpark = function (index) {
  const data = loadSparkFile();

  // Add our new spark to the ideas array
  data.ideas.splice(index, 1);

  storeSparkFile(data);
  listSparks();
};

module.exports = {
  create: createSpark,
  list: listSparks,
  remove: removeSpark,
};
