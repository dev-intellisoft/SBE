const bignumber = require(`bignumber.js`)
const FunctionModifier = artifacts.require("FunctionModifier")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("FunctionModifier", async (accounts) =>
{
  let contract
  before(async () => contract = await FunctionModifier.deployed())

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
  })

  it(`should decrement x value`, async () =>
  {
    // await contract.decrement(2)
    await contract.decrement(1)
    await contract.decrement(1)
    const x = await new bignumber(await contract.getXValue()).toNumber()
    assert.equal(x, 8)
  })

  // it(`should not change owner`, async () =>
  // {
  //   const owner = await contract.getOwner()
  //   await contract.changeOwner(accounts[0])
  //   const newOwner = await contract.getOwner()
  //   assert.isTrue(newOwner !== owner)
  // })

  it(`should change ownership`, async () =>
  {
    const owner = await contract.getOwner()
    await contract.changeOwner(accounts[1])
    const newOwner = await contract.getOwner()
    assert.isTrue(newOwner !== owner)
  })

})
