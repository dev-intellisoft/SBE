const cpA = artifacts.require(`cpA`)
const cpB = artifacts.require(`cpB`)
const cpC = artifacts.require(`cpC`)
const cpD = artifacts.require(`cpD`)

module.exports = deployer =>
{
    deployer.deploy(cpA)
    deployer.deploy(cpB)
    deployer.deploy(cpC)
    deployer.deploy(cpD)
}
