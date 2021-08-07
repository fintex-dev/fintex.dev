const path = require('path');

const greetingsPath = path.resolve(__dirname, 'contracts', 'Greetings.sol');

const fs = require('fs'); 
const solc = require('solc'); 
const source = JSON.stringify(fs.readFileSync(greetingsPath, 'utf8')); 


console.log(source)


const wowLookAtThat = solc.compile(source);

console.log(wowLookAtThat)

//module.exports = wowLookAtThat.contracts["Greetings.sol"]["FirstContract"];




//module.exports = solc.compile(JSON.stringify(source),1).contracts[':Greetings'];
