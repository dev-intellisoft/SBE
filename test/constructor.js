const B = artifacts.require(`cB`)
const C = artifacts.require(`cC`)
const E = artifacts.require(`cE`)

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Constructor", async (/* accounts */) =>
{
  let b, c, e
  before(async () =>
  {
    b = await B.deployed()
    c = await C.deployed()
    e = await E.deployed()
  })
  it("should assert true", async () =>
  {
    assert.notEqual(b.address, 0x0)
    assert.notEqual(b.address, '')
    assert.notEqual(b.address, null)
    assert.notEqual(b.address, undefined)

    assert.notEqual(c.address, 0x0)
    assert.notEqual(c.address, '')
    assert.notEqual(c.address, null)
    assert.notEqual(c.address, undefined)

    assert.notEqual(e.address, 0x0)
    assert.notEqual(e.address, '')
    assert.notEqual(e.address, null)
    assert.notEqual(e.address, undefined)
  })

  it(`should deploy B contract properly`, async () =>
  {
    const name = await b.getName()
    const text = await b.getText()

    assert.equal(name, `Input to X`)
    assert.equal(text, `Input to Y`)
  })

  it(`should deploy C contract properly`, async () =>
  {
    const name = await c.getName()
    const text = await c.getText()

    assert.equal(name, `Message to X`)
    assert.equal(text, `Message to Y`)
  })

  it(`should deploy E contract properly`, async () =>
  {
    const name = await e.getName()
    const text = await e.getText()

    assert.equal(name, `X was called`)
    assert.equal(text, `Y was called`)
  })
})
