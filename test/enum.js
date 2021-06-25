const bignumber = require(`bignumber.js`)
const Enum = artifacts.require("Enum")

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Enum", async (/* accounts */) =>
{
  let contract
  before(async () => contract = await Enum.deployed())

  it("should assert true", async () =>
  {
    const address = contract.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it(`should return default value of status that is 0(Pending)`, async () =>
  {
    const status = await new bignumber(await contract.get()).toNumber()
    assert.equal(status, 0)
  })

  it(`should set status as 3(Rejected)`, async () =>
  {
    await contract.set(3)
    const status = await new bignumber(await contract.get()).toNumber()
    assert.equal(status, 3)
  })

  it(`should set status as 4(Canceled)`, async () =>
  {
    await contract.cancel()
    const status = await new bignumber(await contract.get()).toNumber()
    assert.equal(status, 4)
  })

  it(`should reset status`, async () =>
  {
    await contract.reset()
    const status = await new bignumber(await contract.get()).toNumber()
    assert.equal(status, 0)
  })

})
