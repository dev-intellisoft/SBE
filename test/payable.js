const bignumber = require(`bignumber.js`)
const Payable = artifacts.require("Payable")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Payable", async (/* accounts */) =>
{
  let contract
  before(async() => contract = await Payable.deployed())

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

    it(`should get balance`, async () =>
    {
      const balance = await new bignumber(await contract.getBalance()).toNumber()
      assert.isTrue(isFinite(balance))
    })
  })

  // it(`should deposit some ether`, async () =>
  // {
  //   await contract.deposit(1e18)
  //
  //   const balance = await new bignumber(await contract.getBalance()).toNumber()
  //   console.log(`~~~~~~~~~~>`, balance)
  // })
})
