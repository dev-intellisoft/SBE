// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Callee {
  uint public x;
  uint public value;

  function setX(uint _x) public returns (uint) {
    x = _x;
    return x;
  }

  function setXandSentEther(uint _x) public payable returns(uint, uint) {
    x = _x;
    value = msg.value;
    return (x, value);
  }

  function getX() public view returns(uint) {
    return x;
  }
}

contract Caller {
  function setX(Callee _callee, uint _x) public {
    uint x = _callee.setX(_x);
  }

  function setXFromAddress(address _addr, uint _x) public {
    Callee callee = Callee(_addr);
    callee.setX(_x);
  }

  function setXandSendEther(Callee _callee, uint _x) public payable {
    (uint x, uint value) = _callee.setXandSentEther.value(msg.value)(_x);
  }

  function getXFromAddress(address _addr) public view returns(uint) {
    Callee calle = Callee(_addr);
    return calle.getX();
  }
}
