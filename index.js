// Imports
const {
  generate_secret,
  generate_ciphertext,
  create_wallet_set,
  create_wallet,
  get_wallets,
  get_wallet,
  wallet_transactions,
  get_balance,
  transfer_token,
  check_transfer_state,
} = require("./helper_functions.js");

// use npm run start

// ----- Generate a random secret and a ciphertext -----
// ----- Step 1 -----

// Generate a random secret
// const secret = generate_secret();
// console.log("secret: ", secret);

// // // // Generate ciphertext
// const ciphertext = generate_ciphertext(secret);

// ! Do not forget to save the secret and the ciphertext in a secure place. !

// ----- Create Wallet -----
// ----- Step 2 -----

// Create Wallet Set
// create_wallet_set();

// Save the wallet set id in the .env file

// ----- Step 3 -----

// Create a wallet
// create_wallet();

// Save both wallet ids and addresses in the .env file

// ----- Step 4 -----

// Get Wallets
// get_wallets();

// ----- Step 5 -----

// Get specific wallet
// get_wallet();

// Get tokens from faucet to see the transaction

// ----- Step 6 -----

// List wallet transactions
// wallet_transactions();

// Save token id in the .env file

// ----- Step 7 -----
// Get wallet balance
// get_balance();

// ----- Step 8 -----

// Transfer USDC
// transfer_token();

// You will use this id in the next step, so go ahead and save it.

// ----- Step 9 -----

// Check transfer state
// check_transfer_state("3d147102-d79f-55a6-97c3-a9b719bc1ab8");
