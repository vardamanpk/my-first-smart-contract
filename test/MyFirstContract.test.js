const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

const ganacheUrl = 'http://localhost:7545'; // Update this with your own blockchain URL
const web3 = new Web3(ganacheUrl);

describe('MyFirstContract', () => {
  let accounts;
  let contract;

  beforeAll(async () => {
    console.log('Connecting to blockchain at', ganacheUrl)
    accounts = await web3.eth.getAccounts();

    // Load the contract ABI and bytecode from the build directory
    const contractName = 'MyFirstContract';
    const contractPath = path.resolve(__dirname, '../build', `contracts_${contractName}_sol_${contractName}`);
    const contractAbi = JSON.parse(fs.readFileSync(`${contractPath}.abi`, 'utf8'));
    const contractBytecode = fs.readFileSync(`${contractPath}.bin`, 'utf8');

    // Create a new contract instance using the ABI
    contract = new web3.eth.Contract(contractAbi);

    // Deploy the contract and get the deployed instance
    const result = await contract.deploy({
      data: contractBytecode,
      arguments: []
    }).send({
      from: accounts[0],
      gas: '1000000'
    });
    console.log(`Contract deployed at ${result.options.address}`);

    // Set the contract address so we can use it in our tests
    contract.options.address = result.options.address;
  });

  test('sets and gets data correctly', async () => {
    const data = 'Hello, world!';

    // Set data
    await contract.methods.setData(data).send({ from: accounts[0] });

    // Get data
    const result = await contract.methods.getData().call({ from: accounts[0] });

    expect(result).toEqual(data);
  });
});
