const bignumber = require(`bignumber.js`)
const EtherUnits = artifacts.require("EtherUnits");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("EtherUnits", function (/* accounts */)
{
  let contract
  before(async () => contract = await EtherUnits.deployed())

  describe(`deployment`,  async () =>
  {
    it("should assert true", async () =>
    {
      const address = contract.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it(`should check all values is right`, async () =>
    {
      const oneWei = await new bignumber(await contract.oneWei()).toNumber()
      const oneEther = await new bignumber(await contract.oneEther()).toNumber()
      assert.equal(oneWei, 1)
      assert.equal(oneEther, 1e18)
    })
  })
});
