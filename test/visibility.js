const vBase = artifacts.require(`vBase`)
const vChild = artifacts.require(`vChild`)

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Visibility", async (/* accounts */) =>
{
  let base, child
  before(async () =>
  {
    base = await vBase.deployed()
    child = await vChild.deployed()
  })

  describe(`deployment`, async () =>
  {
    it("should assert true", async () =>
    {
      assert.notEqual(base.address, 0x0)
      assert.notEqual(base.address, '')
      assert.notEqual(base.address, null)
      assert.notEqual(base.address, undefined)

      assert.notEqual(child.address, 0x0)
      assert.notEqual(child.address, '')
      assert.notEqual(child.address, null)
      assert.notEqual(child.address, undefined)
    })

    it(`should print "internal function called"`, async () =>
    {
      const text = await child.testInternalFunc()
      assert.equal(text, `internal function called`)
    })

    it(`should print "private function called"`, async () =>
    {
      const text = await child.testPrivateFunc()
      assert.equal(text, `private function called`)
    })

  })
})
