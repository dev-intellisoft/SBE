// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract sA {
  string public name = "Contract A";
  function getName() public view returns(string memory) {
    return name;
  }
}

contract sC is sA {
  constructor () public {
    name = "Contract C";
  }
}
