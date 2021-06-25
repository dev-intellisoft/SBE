// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

//try catch does not compiles.

contract Foo {
  address public owner;

  constructor (address _owner) public {
    require(_owner != address(0), "invalid address");
    assert(_owner != 0x0000000000000000000000000000000000000001);
    owner = _owner;
  }

  function myFunc (uint x) public view returns(string memory) {
    require(x != 0, "require failed");
    return "my func was called";
  }
}

contract Bar {
  event Log(string message);
  event LogBytes(bytes data);

  Foo public foo;

  constructor() public {
    foo = new Foo(msg.sender);
  }

//  function tryCatchExternalCall (uint _i) public {
//    try foo.myFunc(_i) {
//      emit Log(result);
//    } catch(bytes) {
//      emit Log("external call failed");
//    }
//  }

//  function tryCatchNewContract(address _owner) public {
//    try new Foo(_owner) returns(Foo foo) {
//      emit Log("Foo created");
//    } catch Error(string memory reason) {
//      emit Log(reason);
//    } catch (bytes memory reason) {
//      emit LogBytes(reason);
//    }
//  }
}