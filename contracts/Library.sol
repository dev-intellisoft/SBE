// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

library SafeMath {
  function add(uint x, uint y) internal pure returns(uint) {
    uint z = x + y;
    require(z >= x, "uint overflow");
    return z;
  }
}

contract TestSafeMath {
  using SafeMath for uint;

  uint public MAX_UINT = 2 ** 256 - 1;

  function testAdd(uint x, uint y) public pure returns(uint) {
    return x.add(y);
  }
}

library LibArray {
  function remove(uint [] storage arr, uint index) public {
    arr[index] = arr[arr.length - 1];
    arr.pop();
  }
}

contract TestArray {
  using LibArray for uint[];

  uint [] public arr;

  function testArrayRemove() public {
    for (uint i = 0; i < 3; i ++) {
      arr.push(i);
    }

    arr.remove(1);

    assert(arr.length == 2);
    assert(arr[0] == 0);
    assert(arr[1] == 2);
  }

  function getArrayLength() public view returns(uint) {
    return arr.length;
  }
}
