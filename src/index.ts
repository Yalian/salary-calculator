import CommandLineAdapter from "./Employee/Infraestructure/CommandLineAdapter";
import * as fs from "fs";
import { extractArguments } from "./Utils/ExtractArguments";

(() => {
  const args = extractArguments();
  const input = args.input ?? undefined;
  const path = args.path ?? undefined;

  if (input) {
    return CommandLineAdapter();
  }

  try {
    const data = fs.readFileSync(
      path ? path : __dirname + "/../input-data.txt",
      "utf8"
    );

    const inputRows = data.split("\n");

    inputRows.forEach((row) => {
      process.argv = ["input=" + row];
      CommandLineAdapter();
    });
  } catch (err) {
    console.log(err.message);
  }
})();
