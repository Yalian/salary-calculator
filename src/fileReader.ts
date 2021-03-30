import fs from "fs";
import CommandLineAdapter from "./Employee/Infraestructure/CommandLineAdapter";

const readFile = async () => {
    try {
        const data = await fs.readFileSync(__dirname + "/example-data.txt", "utf8");
        const inputRows = data.split("\n");

        inputRows.forEach((row) => {
            process.argv = [row];
            CommandLineAdapter();
        });
    } catch (err) {
        console.error(err);
    }
};

readFile().then(() => console.log('Calculations finished'));
