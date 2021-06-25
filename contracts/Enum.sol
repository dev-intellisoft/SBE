// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

//import "./EnumDeclaration.sol";

contract Enum {
  enum Status {
    Pending,
    Shipped,
    Accepted,
    Rejected,
    Canceled
  }

  Status public status;

  function get() public view returns (Status) {
    return status;
  }

  function set(Status _status) public {
    status = _status;
  }

  function cancel() public {
    status = Status.Canceled;
  }

  function reset() public {
    delete status;
  }
}
