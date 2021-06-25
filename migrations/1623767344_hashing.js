const GuessTheMagicWord = artifacts.require(`GuessTheMagicWord`)
const HashFunction = artifacts.require(`HashFunction`)

module.exports = deployer =>
{
    deployer.deploy(GuessTheMagicWord)
    deployer.deploy(HashFunction)
}
