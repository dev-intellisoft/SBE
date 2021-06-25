// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ViewAndPure {
  uint public x = 1;

  function addToX(uint y) public view returns(uint) {
    return x + y;
  }

  function add(uint i, uint j) public pure returns(uint) {
    return i + j;
  }

  function get() public view returns(uint) {
    return x;
  }
}
