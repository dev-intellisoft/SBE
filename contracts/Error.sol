// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Error {
  function testRequire(uint _i) public {
    require(_i > 10, "input must be greater than 10");
  }

  function testRevert(uint _i) public {
    if(_i <= 10) {
      revert("input must be greater than 10");
    }
  }

  uint public num;
  function testAssert() public {
    assert(num == 0);
  }
}
