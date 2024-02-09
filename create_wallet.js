// Imports
const crypto = require("crypto");
const {
  initiateDeveloperControlledWalletsClient,
} = require("@circle-fin/developer-controlled-wallets");
require("dotenv").config();
const forge = require("node-forge");
const { create } = require("domain");

// Setup developer sdk
const circleDeveloperSdk = initiateDeveloperControlledWalletsClient({
  apiKey: `${process.env.API_KEY}`,
  entitySecret: `${process.env.ENTITY_SECRET}`, // Make sure to enter the entity secret from the step above.
});

// Generate a random secret
const generate_secret = () => {
  const secret = crypto.randomBytes(32).toString("hex");
  return secret;
};

// Fetch public key
const fetch_public_key = async (secret) => {
  const local_circleDeveloperSdk = initiateDeveloperControlledWalletsClient({
    apiKey: `${process.env.API_KEY}`,
    entitySecret: secret, // Make sure to enter the entity secret from the step above.
  });

  const response = await local_circleDeveloperSdk.getPublicKey({});
  return response.data.publicKey;
};

// Generate ciphertext
const generate_ciphertext = async (secret) => {
  const entitySecret = forge.util.hexToBytes(secret);
  const publicKey = forge.pki.publicKeyFromPem(await fetch_public_key(secret));
  const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
    md: forge.md.sha256.create(),
    mgf1: {
      md: forge.md.sha256.create(),
    },
  });
  console.log("encryptedData:", forge.util.encode64(encryptedData));
  return forge.util.encode64(encryptedData);
};

// Create Wallet Set
const create_wallet_set = async () => {
  const response = await circleDeveloperSdk.createWalletSet({
    name: "Set 1",
  });
  console.log("response:", response);
};

// Create Wallet Set
const create_wallet = async () => {
  const response = await circleDeveloperSdk.createWallets({
    accountType: "SCA",
    blockchains: ["MATIC-MUMBAI"],
    count: 2,
    walletSetId: `${process.env.WALLET_SET_ID}`,
  });

  console.log(response.data.wallets);
};

const get_wallets = async () => {
  try {
    const response = await circleDeveloperSdk.getWallet({});
    console.log(response);
  } catch (error) {
    console.log("error:", error);
  }
};

// Exports
module.exports = {
  generate_secret,
  generate_ciphertext,
  create_wallet_set,
  create_wallet,
  get_wallets,
};
