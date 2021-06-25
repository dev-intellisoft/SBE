// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  uint public num;

  function set(uint _num) public {
    num = _num;
  }

  //you can read from the state without sending a transaction
  function get() public returns (uint){
    return num;
  }
}
