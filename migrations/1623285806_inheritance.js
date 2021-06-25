const iA = artifacts.require(`iA`)
const iB = artifacts.require(`iB`)
const iC = artifacts.require(`iC`)
const iD = artifacts.require(`iD`)
const iE = artifacts.require(`iE`)
const iF = artifacts.require(`iF`)

module.exports = deployer =>
{
    deployer.deploy(iA)
    deployer.deploy(iB)
    deployer.deploy(iC)
    deployer.deploy(iD)
    deployer.deploy(iE)
    deployer.deploy(iF)
}
