using System;
using System.Net;
using System.Threading.Tasks;
using VaultSharp.V1.Commons;
using VaultSharp.V1.AuthMethods;
using VaultSharp.V1.AuthMethods.Token;
using VaultSharp;
using System.Collections.Generic;

namespace NethereumSample
{

class VaultClient{

  
   public async Task<string> getSecret(string path){

   
  

      // Initialize one of the several auth methods.
      IAuthMethodInfo authMethod = new TokenAuthMethodInfo("s.kjFGQIkHm5xinFR17wHE2y3T");

      // Initialize settings. You can also set proxies, custom delegates etc. here.
      var vaultClientSettings = new VaultClientSettings("https://q.fintex.dev:8200", authMethod);

      IVaultClient vaultClient = new VaultSharp.VaultClient(vaultClientSettings);
      

      // Use client to read a key-value secret.

      // Very important to provide mountpath and secret name as two separate parameters. Don't provide a single combined string.
      // Please use named parameters for 100% clarity of code. (the method also takes version and wrapTimeToLive as params)

      //var kv2Secret = await vaultClient.V1.Secrets.KeyValue.V2.ReadSecretAsync(path: path, mountPoint: "secret");
       var kv2Secret =await vaultClient.V1.Secrets.KeyValue.V1.ReadSecretAsync(path, "secret");
       var d = kv2Secret.Data["value"];
      return d.ToString();
    }
  }
}