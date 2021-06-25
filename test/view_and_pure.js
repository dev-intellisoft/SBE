const bignumber = require(`bignumber.js`)
const ViewAndPure = artifacts.require("ViewAndPure")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("ViewAndPure", async (/* accounts */) =>
{
  let contract
  before(async () => contract = await ViewAndPure.deployed())

  it("should assert true", async () =>
  {
    const address = contract.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it(`should not change the value of x`, async () =>
  {
    const y = await new bignumber(await contract.get()).toNumber()
    await contract.addToX(1)
    const x = await new bignumber(await contract.get()).toNumber()
    assert.equal(x, y)
  })

  it(`should add to value`, async () =>
  {
    const total = await new bignumber(await contract.add(5, 5)).toNumber()
    assert.equal(total, 10)
  })
});
