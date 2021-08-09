// npm install node-vault

const vault = require("node-vault")({
  apiVersion: "v1",
  endpoint: "https://10.0.0.1:8200",
});

const run = async () => {
   vault.token = process.env.VAULT_TOKEN;
   

   var data  = await vault.read("secret/test"); 
   console.log(data.data)

    data  = await vault.read("secret/metamask_mnemonic"); 
   console.log(data.data.value)

    data = await vault.read("secret/infuraUrl"); 
   console.log(data.data.value)
}

run()
