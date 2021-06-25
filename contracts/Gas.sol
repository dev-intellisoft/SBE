// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Gas {
  uint public i = 0;
  function forever() public {
    while(true){
      i += 1;
    }
  }
}
