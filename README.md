# Test Automation Framework Example for Web3 Decentralized Applications 

This is an example project to showcase a test automation project structure and architecture of a Dapp using Cypress and Synpress as a plugin. You can find more info about Synpress here: https://github.com/Synthetixio/synpress.

System under test link: https://dapp-react-secur.vercel.app/
Source code of the react dapp used for the test project: https://github.com/DavitMkhitaryan/dapp-react-secur

Important information about the project:
1. Synpress requires you to have an .env file, values of which will decide how to set up the metamask wallet (network, account, etc.). In this project, I used a slighly different approach and avoided using the env file at all, which may be especially useful if you need to run the your tests on different environments and networks. You can find the test command in the package.json, where all the neccessary network, password and other metamask data is already given. The only thing which needs to be added during the test run is the metamask account private key.
2. Synpress is used as a plugin here for Cypress. You can also use synpress as a standalone test automation framework. 

Running the tests:
1. Run `npm install`
2. Run `PRIVATE_KEY=your_metamask_account_private_key npm test`
3. Find the test run report in 'reports/index.html' file.

Please, leave a star if you find it useful, thanks!
