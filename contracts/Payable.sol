// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


// ?????????
contract Payable {
  address payable public owner;
  constructor() payable public {
    owner = msg.sender;
  }

  function deposit() public payable {}

  function notPayable() public {}

  function getBalance() public view returns(uint) {
    return address(this).balance;
  }

  function withdraw() public {
    uint amount = address (this).balance;
//    (bool success, ) = owner.call{value: amount}("");
    (bool success, ) = owner.call.value(amount)("");
    require(success, "Failed to send ether");
  }

  function transfer(address payable _to, uint _amount) public {
//    (bool success) = _to.call{value: _amount}("");
    (bool success, ) = _to.call.value(_amount)("");
    require(success, "Failed to send ether");
  }
}
