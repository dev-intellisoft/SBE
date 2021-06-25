const Callee = artifacts.require(`Callee`)
const Caller = artifacts.require(`Caller`)

module.exports = deployer =>
{
    deployer.deploy(Callee)
    deployer.deploy(Caller)
}

