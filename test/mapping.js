const bignumber = require(`bignumber.js`)
const Mapping = artifacts.require("Mapping");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Mapping", function (accounts)
{
  let contract
  before(async () => contract = await Mapping.deployed())

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

    it(`should return 0 as default value when the address does not exists!`, async () =>
    {
      const result = await new bignumber(await contract.get(accounts[0])).toNumber()
      assert.equal(result, 0)
    })

    it(`should set properly a value to address`, async () =>
    {
      const value = 10
      await contract.set(accounts[0], value)
      const result = await new bignumber(await contract.get(accounts[0])).toNumber()
      assert.equal(result, value)
    })

    it(`should remove the address from map`, async () =>
    {
      await contract.remove(accounts[0])
      const result = await new bignumber(await contract.get(accounts[0])).toNumber()
      assert.equal(result, 0)
    })
  })
})
