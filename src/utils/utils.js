import fs from "fs";

const log = (message) => {
  console.log(`************${message}************`);
};

const readJSONFile = (filePath) => {
  return JSON.parse(fs.readFileSync(`./${filePath}.json`));
};

export { log, readJSONFile };
