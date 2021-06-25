const vBase = artifacts.require(`vBase`)
const vChild = artifacts.require(`vChild`)

module.exports = deployer =>
{
    deployer.deploy(vBase)
    deployer.deploy(vChild)
}
