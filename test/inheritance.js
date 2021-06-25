const iA = artifacts.require(`iA`)
const iB = artifacts.require(`iB`)
const iC = artifacts.require(`iC`)
const iD = artifacts.require(`iD`)
const iE = artifacts.require(`iE`)
const iF = artifacts.require(`iF`)


/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Inheritance", async (/* accounts */) =>
{
  let a, b, c, d, e, f

  before(async () =>
  {
    a = await iA.deployed()
    b = await iB.deployed()
    c = await iC.deployed()
    d = await iD.deployed()
    e = await iE.deployed()
    f = await iF.deployed()
  })

  describe(`deployment`, async () =>
  {
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

      assert.notEqual(e.address, 0x0)
      assert.notEqual(e.address, '')
      assert.notEqual(e.address, null)
      assert.notEqual(e.address, undefined)

      assert.notEqual(f.address, 0x0)
      assert.notEqual(f.address, '')
      assert.notEqual(f.address, null)
      assert.notEqual(f.address, undefined)
    })

    it(`should return "A" from A.foo() `, async () => assert.equal(await a.foo(), `A`))

    it(`should return "B" from B.foo()`, async () => assert.equal(await b.foo(), `B`))

    it(`should return "C" from C.foo()`, async () => assert.equal(await c.foo(), `C`))

    it(`should return "C" from D.foo()`, async () => assert.equal(await d.foo(), `C`))

    it(`should return "B" from E.foo()`, async () => assert.equal(await e.foo(), `B`))

    it(`should return "B" from F.foo()`, async () => assert.equal(await f.foo(), `B`))

  })
});
