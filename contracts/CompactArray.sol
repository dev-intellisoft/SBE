// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract CompactArray {
  uint[] public arr;

  function remove(uint index) public {
    arr[index] = arr[arr.length - 1];
    arr.pop();
  }

  function test() public {
    arr.push(1);
    arr.push(2);
    arr.push(3);
    arr.push(4);

    remove(1);

    remove(2);
  }
}
