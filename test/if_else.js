const bignumber = require(`bignumber.js`)
const IfElse = artifacts.require("IfElse")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("IfElse",  async (accounts) =>
{
  let contract
  before(async () => contract = await IfElse.deployed())

  describe(`deployment`, async() =>
  {
    it("should assert true", async () =>
    {
      const address = contract.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it(`should return 0`, async () =>
    {
      const number = await new bignumber(await contract.foo(5)).toNumber()
      assert.equal(number, 0)
    })

    it(`should return 1`, async () =>
    {
      const number = await new bignumber(await contract.foo(15)).toNumber()
      assert.equal(number, 1)
    })

    it(`should return 2`, async () =>
    {
      const number = await new bignumber(await contract.foo(50)).toNumber()
      assert.equal(number, 2)
    })
  })
});
