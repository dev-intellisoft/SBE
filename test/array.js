const bignumber = require(`bignumber.js`)
const Array = artifacts.require("Array");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Array", function (/* accounts */)
{
  let contract
  before(async () => contract = await Array.deployed())

  it("should assert true", async () =>
  {
    const address = contract.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  it(`should return the array length`, async () =>
  {
    const arrLen = await new bignumber(await contract.getLength()).toNumber()
    assert.equal(arrLen, 0)
  })

  it(`should set a new element in array`, async () =>
  {
    await contract.push(1)
    const arrLen = await new bignumber(await contract.getLength()).toNumber()
    assert.equal(arrLen, 1)
  })

  it(`should remove an element`, async () =>
  {
    await contract.pop()
    const arrLen = await new bignumber(await contract.getLength()).toNumber()
    assert.equal(arrLen, 0)
  })

  it(`should return the array with right order`, async () =>
  {
    let result = []
    const values = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

    for ( let i = 0; i < values.length; i ++ )
      await contract.push(values[i])

    const arr = await contract.getArr()

    for( let i = 0; i < arr.length; i ++ )
      result.push(await new bignumber(arr[i]).toNumber())

    assert.equal(values.join(), result.join())
  })
});
