async function main() {
  // if you changed the name of the contract, be sure to update this here!
  const nft = await hre.ethers.deployContract("MyToken");

  await nft.waitForDeployment();

  console.log(`deployed to ${nft.target}`);
 
  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(await signer0.getAddress(), "ipfs://QmbCwoJB7g9b86BfEahsjzyzzNx3WEu7Jc1opXWgeTXFgb");

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
