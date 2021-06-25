const Todos = artifacts.require("Todos");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Todos", async (/* accounts */) =>
{
  let contract
  before(async () => contract = await Todos.deployed())
  it("should assert true", async () =>
  {
    const address = contract.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
  })

  // it(`should not be allowed to get a todo that does not exists `, async () =>
  // {
  //   const todos = await contract.get(0).should.be.rejected
  // })

  it(`should add new todo`, async () =>
  {
    const text = `Buy Food`
    await contract.create(text)
    const todo = await contract.get(0)
    assert.equal(text, todo.text)
  })

  it(`should update todos name`, async () =>
  {
    const text = `买吃饭`
    await contract.update(0, text)
    const todo = await contract.get(0)
    assert.equal(todo.text, text)
  })

  it(`should create a new todo and toggle it as completed`, async () =>
  {
    const text = `学习中文`
    await contract.create(text)
    await contract.toggleCompleted(1)
    const todo = await contract.get(1)
    assert.equal(true, todo.completed)
  })

});
