// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract vBase {
  function privateFunc() private pure returns(string memory) {
    return "private function called";
  }

  function testPrivateFunc() public pure returns(string memory) {
    return privateFunc();
  }

  function internalFunc() internal pure returns(string memory) {
    return "internal function called";
  }

  function testInternalFunc() public pure returns(string memory) {
    return internalFunc();
  }

  function publicFunc() public pure returns(string memory) {
    return "public function called";
  }

  function externalFunc() external pure returns(string memory) {
    return "external function called";
  }

  string private privateVar = "my private variable";
  string internal internalVar = "my internal variable";
  string public publicVar = "my public variable";
}

contract vChild is vBase {
  function testInternalFunc() public pure returns(string memory) {
    return internalFunc();
  }
}
