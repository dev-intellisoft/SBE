const cpA = artifacts.require(`cpA`)
const cpB = artifacts.require(`cpB`)
const cpC = artifacts.require(`cpC`)
const cpD = artifacts.require(`cpD`)

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Calling", async (/* accounts */) =>
{
  let a, b, c, d
  before(async () =>
  {

    a = await cpA.deployed()
    b = await cpB.deployed()
    c = await cpC.deployed()
    d = await cpD.deployed()
  })
  it("should assert true", async () =>
  {
    assert.notEqual(a.address, 0x0)
    assert.notEqual(a.address, '')
    assert.notEqual(a.address, null)
    assert.notEqual(a.address, undefined)

    assert.notEqual(b.address, 0x0)
    assert.notEqual(b.address, '')
    assert.notEqual(b.address, null)
    assert.notEqual(b.address, undefined)

    assert.notEqual(c.address, 0x0)
    assert.notEqual(c.address, '')
    assert.notEqual(c.address, null)
    assert.notEqual(c.address, undefined)

    assert.notEqual(d.address, 0x0)
    assert.notEqual(d.address, '')
    assert.notEqual(d.address, null)
    assert.notEqual(d.address, undefined)
  })

  it(`should print "cpA.foo called"`, async () =>
  {
    const { logs } =  await a.foo()
    assert.equal(`cpA.foo called`, logs[0].args.message)
  })

  it(`should print "cpA.bar called"`, async () =>
  {
    const { logs } =  await a.bar()
    assert.equal(`cpA.bar called`, logs[0].args.message)
  })

  it(`should print "cpB.foo called"`, async () =>
  {
    const { logs } =  await b.foo()
    assert.equal(`cpB.foo called`, logs[0].args.message)
  })

  it(`should print "cpB.bar called"`, async () =>
  {
    const { logs } =  await b.bar()
    assert.equal(`cpB.bar called`, logs[0].args.message)
  })

  it(`should print "cpB.foo called"`, async () =>
  {
    const { logs } =  await b.foo()
    assert.equal(`cpB.foo called`, logs[0].args.message)
  })
})
