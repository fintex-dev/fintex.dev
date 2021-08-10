
// Testing with Alchemy provider und Waffle

var Web3 = require('web3');
const { ethers } = require("ethers");

const run = async () => {

  // Get Secrets from Vault
  const vault = require("node-vault")({
      apiVersion: "v1",
      endpoint: "https://10.0.0.1:8200",
  });
  vault.token = process.env.VAULT_TOKEN;
  data  = await vault.read("secret/metamask_mnemonic"); 
  const mnemonic = data.data.value;
  data = await vault.read("secret/alchemyUrl"); 
  const alchemyUrl = data.data.value;

  // Using web3js
  const web3 = new Web3(alchemyUrl);
 
  // Using ethers.js
  const provider = new ethers.providers.JsonRpcProvider(alchemyUrl);

	var addr ="0x4CB0D46FbC185B3bA776C1Cc594B1adBF19C5c3B";
	var addrPet1 = "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73";

	const balance = await provider.getBalance(addrPet1);

	const ethBalance = web3.utils.fromWei(balance.toString(), 'ether');
  console.log(ethBalance);

}
run()
