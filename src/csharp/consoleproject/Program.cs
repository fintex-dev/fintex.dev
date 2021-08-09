using System;
using System.Net;

using System.Threading.Tasks;
using Nethereum.Web3;

namespace NethereumSample
{
    class Program
    {
        static void Main(string[] args)
        {

             ServicePointManager.ServerCertificateValidationCallback += (sender, cert, chain, sslPolicyErrors) => true;

             ServicePointManager.Expect100Continue = true;
                ServicePointManager.SecurityProtocol =
                SecurityProtocolType.Tls
                | SecurityProtocolType.Tls11
                | SecurityProtocolType.Tls12;
               // | SecurityProtocolType.Ssl3;

            System.Net.ServicePointManager.ServerCertificateValidationCallback +=
                    (sender, cert, chain, error) =>
                    {
                        // put a breakpoint and debug the 'error' variable

                        return true;
                    };


            //GetAccountBalance().Wait();
            var t = new VaultClient().getSecret("infuraUrl");

            t.Wait();
           var url = t.Result;
            Console.WriteLine(url);


           
        
            
            Console.ReadLine();
        }

        static async Task GetAccountBalance()
        {
            var web3 = new Web3("https://ropsten.infura.io/v3/83f9baf669d145d4844a13c58897bfec");
            var balance = await web3.Eth.GetBalance.SendRequestAsync("0x4CB0D46FbC185B3bA776C1Cc594B1adBF19C5c3B");
            Console.WriteLine($"Balance in Wei: {balance.Value}");

            var etherAmount = Web3.Convert.FromWei(balance.Value);
            Console.WriteLine($"Balance in Ether: {etherAmount}");
        }
    }
}
