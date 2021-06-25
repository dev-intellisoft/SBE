const bignumber = require(`bignumber.js`)
const Callee = artifacts.require(`Callee`)
const Caller = artifacts.require(`Caller`)

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("CallingContract", async (/* accounts */) =>
{
  let callee, caller
  before(async () =>
  {
    callee = await Callee.deployed()
    caller = await Caller.deployed()
  })
  describe(`deployment`, async () =>
  {
    it("should assert true", async () =>
    {
      assert.notEqual(callee.address, 0x0)
      assert.notEqual(callee.address, '')
      assert.notEqual(callee.address, null)
      assert.notEqual(callee.address, undefined)

      assert.notEqual(caller.address, 0x0)
      assert.notEqual(caller.address, '')
      assert.notEqual(caller.address, null)
      assert.notEqual(caller.address, undefined)
    })

    it(`should setX in Caller`, async () =>
    {
      await caller.setXFromAddress(callee.address, 100)
    })

    it(`should getX in Caller`, async () =>
    {
      const x = await new bignumber(await caller.getXFromAddress(callee.address)).toNumber()
      assert.equal(x, 100)
    })
  })
});
