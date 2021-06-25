// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Variables {
  //state variable are stored on the blockchain
  string public text = "Hello";
  uint public num  = 123;

  function doSomething() public {
    //local variable are not saved to the blockchain
    uint i = 456;

    //here are some global variable
    uint timestamp = block.timestamp;
    address sender = msg.sender;
  }
}
