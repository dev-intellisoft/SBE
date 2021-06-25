const B = artifacts.require(`cB`)
const C = artifacts.require(`cC`)
const E = artifacts.require(`cE`)

module.exports = deployer =>
{
    deployer.deploy(B)
    deployer.deploy(C, `Message to X`, `Message to Y`)
    deployer.deploy(E)
}

