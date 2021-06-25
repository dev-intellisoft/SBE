// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract dB {
  uint public num;
  address public sender;
  uint public value;

  function setVars(uint _num) public payable {
    num = _num;
    sender = msg.sender;
    value = msg.value;
  }
}

contract dA {
  uint public num;
  address public sender;
  uint public value;

  function setVars(address _contract, uint _num) public payable {
    (bool success, bytes memory data) = _contract.delegatecall(
      abi.encodeWithSignature("setVars(unit256)", _num)
    );
  }
}
