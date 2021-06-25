// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SendEther {
  function sendViaTransfer(address payable _to) public payable {
    _to.transfer(msg.value);
  }

  function sendViaSend(address payable _to) public payable {
    bool sent = _to.send(msg.value);
    require(sent, "Failed to sent ether");
  }

  function sendViaCall(address payable _to) public payable {
    (bool sent, bytes memory data) = _to.call.value(msg.value)("");
    require(sent, "Failed to sent ether");
  }
}
