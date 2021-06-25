const Primitives = artifacts.require("Primitives");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Primitives", function (/* accounts */)
{
  let contract
  before(async () => contract = await Primitives.deployed())

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

    it(`should test default primitives values`, async () =>
    {
      const defaultBoo = await contract.defaultBoo()
      const defaultUint = await contract.defaultUint()
      const defaultInt = await contract.defaultInt()
      const defaultAddr = await contract.defaultAddr()

      assert.equal(defaultBoo, false)
      assert.equal(defaultUint, 0)
      assert.equal(defaultInt, 0)
      assert.equal(defaultInt, 0x0000000000000000000000000000000000000000)
    })

  })
})
