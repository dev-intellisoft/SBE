const sA = artifacts.require(`sA`)
const sC = artifacts.require(`sC`)

module.exports = deployer =>
{
    deployer.deploy(sA)
    deployer.deploy(sC)
}
