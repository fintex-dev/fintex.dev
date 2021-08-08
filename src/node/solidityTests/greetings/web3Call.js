const HDWalletProvider = require('truffle-hdwallet-provider'); 
const Web3 = require('web3');

const compiled_contract = require('./compile.js');
const interface = compiled_contract.output.contracts['Greetings.sol']['MatsFirstContract'].abi;


// Secret
secretsfile="/Users/mat/gitroot/secrets/metawallet.js"  // get the mnemonic variable from here above git roots
conf = require(secretsfile);
mnemonic = conf.mnemonic

contractAddr = "0xFd584c92fCc03c38439653F3486f96C31b56e89C";

const provider = new HDWalletProvider(  
  mnemonic, 
  'https://ropsten.infura.io/v3/83f9baf669d145d4844a13c58897bfec'    
);
const web3 = new Web3(provider);


const makeCall = async () => {
	const contract = await new web3.eth.Contract(interface, contractAddr);

	accounts = await web3.eth.getAccounts(); 
	console.log(accounts[0]);



	let result = await contract.methods.setData("this is new").send({from: accounts[0], gas: 2310334});
	console.log(result);

	result = await contract.methods.getData().call()
	console.log(result);
}

makeCall();


