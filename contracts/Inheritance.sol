// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract iA {
  function foo() public pure returns(string memory) {
    return "A";
  }
}

contract iB is iA {
  constructor() public {}
  function foo() public pure returns(string memory) {
    return "B";
  }
}

contract iC is iA {
  function foo() public pure returns(string memory) {
    return "C";
  }
}

contract iD is iB, iC {
  function foo() public pure returns(string memory) {
    return super.foo();
  }
}

contract iE is iC, iB {
  function foo() public pure returns(string memory) {
    return super.foo();
  }
}

contract iF is iA, iB {
  function foo() public pure returns(string memory) {
    return super.foo();
  }
}