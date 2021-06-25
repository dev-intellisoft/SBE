const bignumber = require(`bignumber.js`)
const SafeMath = artifacts.require(`SafeMath`)
const LibArray = artifacts.require(`LibArray`)
const TestSafeMath = artifacts.require(`TestSafeMath`)
const TestArray = artifacts.require(`TestArray`)

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Library", async (/* accounts */) =>
{
  let safeMath, testSafeMath, libArray, testArray
  before(async() =>
  {
    safeMath = await SafeMath.deployed()
    libArray = await LibArray.deployed()
    testSafeMath = await TestSafeMath.deployed()
    testArray = await TestArray.deployed()
  })

  describe(`deployment`, async () =>
  {
    it("should assert true", async () =>
    {
      assert.notEqual(safeMath.address, 0x0)
      assert.notEqual(safeMath.address, '')
      assert.notEqual(safeMath.address, null)
      assert.notEqual(safeMath.address, undefined)

      assert.notEqual(testSafeMath.address, 0x0)
      assert.notEqual(testSafeMath.address, '')
      assert.notEqual(testSafeMath.address, null)
      assert.notEqual(testSafeMath.address, undefined)

      assert.notEqual(libArray.address, 0x0)
      assert.notEqual(libArray.address, '')
      assert.notEqual(libArray.address, null)
      assert.notEqual(libArray.address, undefined)

      assert.notEqual(testArray.address, 0x0)
      assert.notEqual(testArray.address, '')
      assert.notEqual(testArray.address, null)
      assert.notEqual(testArray.address, undefined)
    })

    it(`should add x plus y`, async () =>
    {
      const x = await new bignumber(await testSafeMath.testAdd(1, 2)).toNumber()
      assert.equal(x, 3)
    })

    it(`should remove an item from array`, async () =>
    {
      const x = await new bignumber(await testArray.getArrayLength()).toNumber()
      await testArray.testArrayRemove()
      const y = await new bignumber(await testArray.getArrayLength()).toNumber()
      assert.equal(x, 0)
      assert.equal(y, 2)
    })
  })
})
