
# My First Smart Contract

A simple Solidity smart contract and test project.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/BlockChain-R/my-first-smart-contract.git
   ```
2. Install the dependencies:

   ```sh
    npm install
    ```

## Usage

### Starting a local blockchain

To start a local blockchain using Ganache, run:
    ```sh
    npm run start
    ```
This will start a local blockchain on port 7545

### Compile the smart contract:

   ```sh
   npm run compile
   ```
This will generate the contract bytecode and ABI in the build/ directory.

### Running tests:

To run the project tests using Jest, run:
   ```sh
   npm run test
   ```
This will run the tests in the test/ directory. The tests will deploy the contract to the local blockchain and run the tests.

## Dependencies

- [web3](https://www.npmjs.com/package/web3) - A collection of libraries that allow you to interact with a local or remote Ethereum node using HTTP, IPC, or WebSocket.
- [ganache-cli](https://www.npmjs.com/package/ganache-cli) - A command-line interface for running a local Ethereum network for testing and development.
- [jest](https://www.npmjs.com/package/jest) - A JavaScript testing framework that can be used for testing Solidity contracts.
- [solc](https://www.npmjs.com/package/solc) - A Solidity compiler that can be used to compile Solidity contracts to bytecode and ABI.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Issues

Please report any issues or bugs to the [issue tracker](https://github.com/BlockChain-R/my-first-smart-contract/issues) on GitHub.

