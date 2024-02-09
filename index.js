// Imports
const {
  generate_secret,
  generate_ciphertext,
  create_wallet_set,
  create_wallet,
  get_wallets,
} = require("./create_wallet.js");

// ----- Generate a random secret and a ciphertext -----
// Generate a random secret
// const secret = generate_secret();
// console.log("secret: ", secret);

// // Generate ciphertext
// const ciphertext = generate_ciphertext(secret);

// ! Do not forget to save the secret and the ciphertext in a secure place. !

// ----- Create Wallet -----
// Create Wallet Set
// create_wallet_set();

// Should return:
// data: {
//     walletSet: {
//       id: '018d8fb6-ae08-70c5-a54d-9daed97ae6f2',
//       custodyType: 'DEVELOPER',
//       name: 'Set 1',
//       updateDate: '2024-02-09T21:12:10Z',
//       createDate: '2024-02-09T21:12:10Z'
//     }
//   },

// Create a wallet
// create_wallet();

// Should return:
// [
//   {
//     id: "6663051d-2508-52e2-a793-b803a540b1da",
//     state: "LIVE",
//     walletSetId: "018d8fb6-ae08-70c5-a54d-9daed97ae6f2",
//     custodyType: "DEVELOPER",
//     address: "0x3408a8fba381fcee6d777e55753630938e749a36",
//     blockchain: "MATIC-MUMBAI",
//     accountType: "SCA",
//     updateDate: "2024-02-09T21:19:59Z",
//     createDate: "2024-02-09T21:19:59Z",
//   },
//   {
//     id: "5db3fefd-cc7e-5554-b83e-5c6b54f0abbc",
//     state: "LIVE",
//     walletSetId: "018d8fb6-ae08-70c5-a54d-9daed97ae6f2",
//     custodyType: "DEVELOPER",
//     address: "0x64e0f1b8ae9e3cc95f6b0dfb93727c855c1f51ed",
//     blockchain: "MATIC-MUMBAI",
//     accountType: "SCA",
//     updateDate: "2024-02-09T21:19:59Z",
//     createDate: "2024-02-09T21:19:59Z",
//   },
// ];

get_wallets();
