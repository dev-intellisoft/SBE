const bignumber = require(`bignumber.js`)
const Counter = artifacts.require("Counter");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Counter", function (/* accounts */)
{
  let contract
  before(async () => contract = await Counter.deployed())
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

    it(`should be zero`, async () =>
    {
      const count = await new bignumber(await contract.get()).toNumber()
      assert.equal(count,  0)
    })

    it(`should increment from 0 to 1`, async () =>
    {
      await contract.inc()
      const count = await new bignumber(await contract.get()).toNumber()
      assert.equal(count, 1)
    })

    it(`should increment from 1 to 10`, async () =>
    {
      for ( let i = 0; i < 9; i ++ )
        await contract.inc()
      const count = await new bignumber(await contract.get()).toNumber()
      assert.equal(count, 10)
    })

    it(`should decrement from 10 to 5`, async () =>
    {
      for ( let i = 10; i > 5;  i -- )
        await contract.dec()
      const count = await new bignumber(await contract.get()).toNumber()
      assert.equal(count, 5)
    })
  })
})
