const ADP = artifacts.require("AdminUpgradeabilityProxy");
const TT = artifacts.require("TokenTest");

module.exports = async function (deployer) {
  await deployer.deploy(TT);
  const impl = await TT.deployed();
  console.log('Deployed', impl.address);
  const proxy = await deployer.deploy(ADP, impl.address, "0x57f0803d8E4a6c267aC934F34DE48141635Ddee5");
};
