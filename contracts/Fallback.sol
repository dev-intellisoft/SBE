// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Fallback {
  event Log(uint gass);

//  fallback() external {
//    emit Log(gasLeft());
//  }

  function getBalance() public view returns(uint) {
    return address (this).balance;
  }
}

contract SendToFallback {
  function transferToFallback(address payable _to) public payable{
    _to.transfer(msg.value);
  }

  function callFallback (address payable _to) public payable {
    (bool sent, ) = _to.call.value(msg.value)("");
    require(sent, "Failed to send ether");
  }
}
