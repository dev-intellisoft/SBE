// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract NestedMapping {
  mapping(address => mapping(uint => bool)) public nested;

  function get( address _addr, uint _i ) public view returns (bool) {
    return nested[_addr][_i];
  }

  function set(address _addr, uint _i, bool _boo ) public {
    nested[_addr][_i] = _boo;
  }

  function remove(address _addr, uint _i) public {
    delete nested[_addr][_i];
  }
}
