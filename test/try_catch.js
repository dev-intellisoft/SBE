// const Foo = artifacts.require(`Foo`)
// const Bar = artifacts.require(`Bar`)
//
// /*
//  * uncomment accounts to access the test accounts made available by the
//  * Ethereum client
//  * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
//  */
// contract("TryCatch", async (/* accounts */) =>
// {
//   let bar, foo
//   before(async () =>
//   {
//     bar = await Bar.deployed()
//     foo = await Foo.deployed()
//   })
//
//   describe(`deployment`, async () =>
//   {
//     it("should assert true", async () =>
//     {
//       assert.notEqual(Bar.address, 0x0)
//       assert.notEqual(Bar.address, '')
//       assert.notEqual(Bar.address, null)
//       assert.notEqual(Bar.address, undefined)
//
//       assert.notEqual(Foo.address, 0x0)
//       assert.notEqual(Foo.address, '')
//       assert.notEqual(Foo.address, null)
//       assert.notEqual(Foo.address, undefined)
//     })
//   })
// });
