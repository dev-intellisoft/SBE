const NestedMapping = artifacts.require("NestedMapping");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("NestedMapping", async (accounts) =>
{
  let contract
  before(async() => contract = await NestedMapping.deployed())

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

    it(`should return false`, async () =>
    {
      const result = await contract.get(accounts[0], 0)
      assert.equal(result, false)
    })

    it(`should set value properly`, async () =>
    {
      await contract.set(accounts[0], 0, true)
      await contract.set(accounts[0], 1, true)

      const value1 = await contract.get(accounts[0], 0)
      const value2 = await contract.get(accounts[0], 1)
      assert.equal(value1, true)
      assert.equal(value2, true)
    })

    it(`should remove the first address in the account`, async () =>
    {
      await contract.remove(accounts[0], 0)
      const value = await contract.get(accounts[0], 0)
      assert.equal(value, false)
    })
  })
});
