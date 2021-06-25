const SafeMath = artifacts.require(`SafeMath`)
const TestSafeMath = artifacts.require(`TestSafeMath`)

const LibArray = artifacts.require(`LibArray`)
const TestArray = artifacts.require(`TestArray`)

module.exports = async deployer =>
{
    await deployer.deploy(SafeMath)
    await deployer.link(SafeMath, TestSafeMath)
    await deployer.deploy(TestSafeMath)

    await deployer.deploy(LibArray)
    await deployer.link(LibArray, TestArray)
    await deployer.deploy(TestArray)
}
