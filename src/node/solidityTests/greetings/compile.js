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

module.exports = solc.compile(JSON.stringify(input));

console.log(solc.compile(JSON.stringify(input)));


//const wowLookAtThat = JSON.parse(solc.compile(JSON.stringify(input)));
//module.exports = wowLookAtThat.contracts["Greetings.sol"][":Greetings"];
