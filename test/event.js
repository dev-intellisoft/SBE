const Event = artifacts.require("Event");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Event", async (/* accounts */) =>
{
  let contract
  before(async() => contract = await Event.deployed())

  it("should assert true", async () =>
  {
    const address = contract.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it(`should emit an event`, async () =>
  {
    const { logs } = await contract.test()
    assert.equal(logs[0].args.message, `Hello World`)
    assert.equal(logs[1].args.message, `Hello EVM`)
  })


})
