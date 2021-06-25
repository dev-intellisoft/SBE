// const Foo = artifacts.require(`Foo`)
const Bar = artifacts.require(`Bar`)

module.exports = deployer =>
{
    // deployer.deploy(Foo)
    deployer.deploy(Bar)
}
