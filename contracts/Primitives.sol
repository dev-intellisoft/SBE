// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
/*
   uint stands for unsigned integer, meaning non negative integers
   different sizes are available
       uint8   ranges from 0 to 2 ** 8 - 1
       uint16  ranges from 0 to 2 ** 16 - 1
       ...
       uint256 ranges from 0 to 2 ** 256 - 1
   */

contract Primitives {
  bool boo = true;
  uint8 public u8 = 1;
  uint256 public u256 = 456;
  uint public u = 123; // uint is an alias for uint256

  int8 public i8 = -1;
  int256 i256 = 456;
  int public i = -123; //int is same as int256

  address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;

  //default values
  //unassigned variable have default value
  bool public defaultBoo;
  uint public defaultUint;
  int public defaultInt;
  address public defaultAddr;
}
