const bignumber = require(`bignumber.js`)
const CarFactory = artifacts.require(`CarFactory`)

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ContractFromContract", async (accounts) =>
{
  let car, carfactory
  before(async() =>
  {
    // car = await Car.deployed(accounts[0], "")
    carfactory = await CarFactory.deployed()
  })

  describe(`deployment`, async () =>
  {
    it("should assert true", async () =>
    {
      assert.notEqual(carfactory.address, 0x0)
      assert.notEqual(carfactory.address, '')
      assert.notEqual(carfactory.address, null)
      assert.notEqual(carfactory.address, undefined)
    })

    it(`should create a contract with accounts[0]`, async () =>
    {
      await carfactory.create(accounts[0], ``)
      const contract = await carfactory.getCar(0)
      assert.equal(contract.owner, accounts[0])
    })

    it(`should create a contract with accounts[1]`, async () =>
    {
      await carfactory.create(accounts[1], ``)
      const contract = await carfactory.getCar(1)
      assert.equal(contract.owner, accounts[1])
    })
  })
})
