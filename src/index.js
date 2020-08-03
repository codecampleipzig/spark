const command = process.argv[2];

if (command == "create") {
  const idea = process.argv[3];
  console.log("... create a spark: " + idea);
} else if (command == "list") {
  console.log("... list all sparks");
} else if (command == "extinguish") {
  const index = process.argv[3];
  console.log("... remove spark with index " + index);
} else {
  console.log("Print the help");
}
