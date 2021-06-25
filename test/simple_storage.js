const bignumber = require(`bignumber.js`)
const SimpleStorage = artifacts.require("SimpleStorage")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("SimpleStorage", function (accounts)
{
  let contract
  before (async () => contract = await SimpleStorage.deployed())

  describe(`deployment`, async () =>
  {
    it("should assert true", async () =>
    {
      const address = contract.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it(`should get the num default value`, async () =>
    {
      const num = await new bignumber(await contract.get.call()).toNumber()
      assert.equal(num, 0)
    })

    it(`should set some value`, async () =>
    {
      await contract.set(10)
      const num = await new bignumber(await contract.get.call()).toNumber()
      assert.equal(num, 10)
    })

  })
});
