require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.1",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    woop: {
      url: "https://rpctestnet.woop.ai/rpc",
      accounts: ['<put your private key here but dont forget to delete later>'],
      gas: 3000000,
      gasPrice: 8000000000,
      
    }
  },
  etherscan: {
    apiKey: {
      woop: "abc"
    },
    customChains: [
      {
        network: "woop",
        chainId: 138,
        allowUnlimitedContractSize: true,
        gas: 3000000,
        gasPrice: 8000000000,
        urls: {
          apiURL: "https://testnet.wikiwoop.com/api",
          browserURL: "https://testnet.wikiwoop.com"
        }
      }
    ]
  }
};
