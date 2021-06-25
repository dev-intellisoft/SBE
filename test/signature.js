const VerifySignature = artifacts.require(`VerifySignature`)

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Signature", async (accounts) =>
{
  let contract
  before(async () => contract = await VerifySignature.deployed())

  describe(`deployment`, async () =>
  {
    it("should assert true", async () =>
    {
      const address = contract.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })
//not finished
    it(`should generate a hash`, async () =>
    {
      const hash = await contract.getMessageHash(accounts[0], 123, `coffee and donuts`, 1)
      const ethHash = await contract.getEthSignedMessageHash(hash)
      // console.log(`------>`, ethHash)
      // console.log(`~~~~~~>`, hash)
    })
  })
})
