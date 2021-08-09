const HDWalletProvider = require('truffle-hdwallet-provider'); 
const Web3 = require('web3');

const compiled_contract = require('./compile.js');
const interface = compiled_contract.output.contracts['Greetings.sol']['MatsFirstContract'].abi;


// Secret
secretsfile="/Users/mat/gitroot/secrets/metawallet.js"  // get the mnemonic variable from here above git roots
conf = require(secretsfile);
mnemonic = conf.mnemonic
infuraUrl = conf.infuraUrl

contractAddr = "0xFd584c92fCc03c38439653F3486f96C31b56e89C";

const provider = new HDWalletProvider(  
  mnemonic, 
  infuraUrl  
);
const web3 = new Web3(provider);


const makeCall = async () => {
	const contract = await new web3.eth.Contract(interface, contractAddr);

	accounts = await web3.eth.getAccounts(); 
	console.log(accounts[0]);

	msg = " this is a very long string, as long as a tweet, moe tha 150 character in preperation for the etiamo love ltter, that should be able to comfortable sit in one bloack not needing any external storage. Hopefuoly this doesn't cost to much gas on ethereum 2";
	msg += msg;
	msg += msg;


	let result = await contract.methods.setData(msg).send({from: accounts[0], gas: 2310334});
	console.log(result);

	result = await contract.methods.getData().call()
	console.log(result);
}

makeCall();


