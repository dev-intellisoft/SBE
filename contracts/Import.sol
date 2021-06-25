// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./ImpFoo.sol";

contract Import {
  ImpFoo public foo = new ImpFoo();

  function getFooName () public view returns (string memory) {
    return foo.name();
  }
}
