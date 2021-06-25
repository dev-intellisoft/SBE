// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FunctionModifier {
  address public owner;
  uint public x = 10;
  bool public locked;

  constructor() public {
    owner = msg.sender;
  }

  modifier onlyOwner() {
    require(msg.sender == owner, "Not owner");
    _;
  }

  modifier  validAddress(address _addr) {
    require(_addr != address(0), "Not valid address");
    _;
  }

  function changeOwner(address _newOwner) public onlyOwner validAddress(_newOwner) {
    require(_newOwner != owner, "You can change your ownership to yourself!");
    owner = _newOwner;
  }

  modifier noReentrancy() {
    require(!locked, "No reentrancy");
    locked = true;
    _;
    locked = false;
  }

  function decrement(uint i) public noReentrancy {
    x -= i;
    if (i > 1) {
      decrement(i - 1);
    }
  }

  function getXValue() public view returns (uint) {
    return x;
  }

  function getOwner() public view returns(address) {
    return owner;
  }
}
