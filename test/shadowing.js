const sA = artifacts.require(`sA`)
const sC = artifacts.require(`sC`)

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Shadowing", async (/* accounts */) =>
{
  let a, c
  before(async () =>
  {
    a = await sA.deployed()
    c = await sC.deployed()
  })

  it("should assert true", async () =>
  {
    assert.notEqual(a.address, 0x0)
    assert.notEqual(a.address, '')
    assert.notEqual(a.address, null)
    assert.notEqual(a.address, undefined)

    assert.notEqual(c.address, 0x0)
    assert.notEqual(c.address, '')
    assert.notEqual(c.address, null)
    assert.notEqual(c.address, undefined)
  })

  it(`should print the right value for name variable in contract A`, async () =>
  {
    const name = await a.getName()
    assert.equal(name, `Contract A`)
  })

  it(`should print the right value for name variable in contract C`, async () =>
  {
    const name = await c.getName()
    assert.equal(name, `Contract C`)
  })
})
