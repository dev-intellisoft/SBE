// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Receiver {
  event Received(address caller, uint amount, string message);

//  fallback() external {
//    emit Received(msg.sender, msg.value, "Fallback was called");
//  }

  function foo(string memory _message, uint _x) public payable returns (uint) {
    emit Received(msg.sender, msg.value, _message);
    return _x + 1;
  }
}

contract Caller {
  event Response(bool success, bytes data);

  function testCallFoo(address payable _addr) public payable {
    (bool success, bytes memory data) =
      _addr.call.value(msg.value)(
        abi.encodeWithSignature("foo(string, uint256)", "call foo", 123)
      ) ;
    emit Response(success, data);
  }

  function testCallDoesNotExists(address _addr) public {
    (bool success, bytes memory data) =
      _addr.call(abi.encodeWithSignature("doesNotExists()"));
    emit Response(success, data);
  }
}
