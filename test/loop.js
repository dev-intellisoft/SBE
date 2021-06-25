const Loop = artifacts.require("Loop");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Loop", function (/* accounts */)
{
  let contract
  before(async () => contract = await Loop.deployed())
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

    it(`should run the function`, async () =>
    {
      await contract.loop()
      assert.isTrue(true)
    })
  })
})
