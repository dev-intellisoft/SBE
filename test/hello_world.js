const HelloWorld = artifacts.require("HelloWorld");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HelloWorld", async (/* accounts */) =>
{



  let contract

  before(async () => {
    contract = await HelloWorld.deployed()
  })


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
    it(`should display "Hello World!" string `, async () =>
    {
      const greet = await contract.greet()
      assert.equal(`Hello World!`, greet)
    })
  })
})
