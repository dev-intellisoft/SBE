const web = require(`web3`)
const GuessTheMagicWord = artifacts.require(`GuessTheMagicWord`)
const HashFunction = artifacts.require(`HashFunction`)

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Hashing", async (accounts) =>
{
  let guessTheMagicWord, hashFunction

  before(async () =>
  {
    guessTheMagicWord = await GuessTheMagicWord.deployed()
    hashFunction = await HashFunction.deployed()
  })

  it("should assert true", async () =>
  {
    assert.notEqual(guessTheMagicWord.address, 0x0)
    assert.notEqual(guessTheMagicWord.address, '')
    assert.notEqual(guessTheMagicWord.address, null)
    assert.notEqual(guessTheMagicWord.address, undefined)

    assert.notEqual(hashFunction.address, 0x0)
    assert.notEqual(hashFunction.address, '')
    assert.notEqual(hashFunction.address, null)
    assert.notEqual(hashFunction.address, undefined)
  })

  describe(`deployment`, async () =>
  {
    it(`should return false`, async () =>
    {
      const bool = await guessTheMagicWord.guess(`test`)
      assert.isFalse(bool)
    })

    it(`should return true`, async () =>
    {
      const bool = await guessTheMagicWord.guess(`Solidity`)
      assert.isTrue(bool)
    })

    it(`should return a hash from string`, async () =>
    {
      const hash = await hashFunction.hash(`bob`, 1, accounts[0])
      assert.isTrue(web.utils.isHex(hash))
    })
  })
})
