const ImpFoo = artifacts.require(`ImpFoo`)
const Import = artifacts.require(`Import`)

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Import", async (/* accounts */) =>
{
  let impFoo, imp
  before(async () =>
  {
    imp = await Import.deployed()
    impFoo = await ImpFoo.deployed()
  })

  describe(`deployment`, async () =>
  {
    it("should assert true", async () =>
    {
      assert.notEqual(imp.address, 0x0)
      assert.notEqual(imp.address, '')
      assert.notEqual(imp.address, null)
      assert.notEqual(imp.address, undefined)

      assert.notEqual(impFoo.address, 0x0)
      assert.notEqual(impFoo.address, '')
      assert.notEqual(impFoo.address, null)
      assert.notEqual(impFoo.address, undefined)
    })

    it(`should get foo name`, async () =>
    {
      const name = await imp.getFooName()
      assert.equal(name, `Foo`)
    })
  })

})
