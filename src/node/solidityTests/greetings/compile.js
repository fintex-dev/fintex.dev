const solc = require("solc");
const path = require("path");
const fs = require("fs");

const contractPath = path.resolve(__dirname, "contracts", "Greetings.sol");
const source = fs.readFileSync(contractPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "Greetings.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

//const tempFile = JSON.parse(solc.compile(JSON.stringify(input)));
//const contractFile = tempFile.contracts['Greetings.sol']['MatsFirstContract'];
//module.exports = contractFile;
//console.log(contractFile)


const output = JSON.parse(solc.compile(JSON.stringify(input)));
module.exports.output = output;


