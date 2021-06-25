const ImpFoo = artifacts.require(`ImpFoo`)
const Import = artifacts.require(`Import`)

module.exports = deployer =>
{
    deployer.deploy(ImpFoo)
    deployer.deploy(Import)
}
