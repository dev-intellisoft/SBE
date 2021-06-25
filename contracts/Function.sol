// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Function {
  function returnMany() public pure returns(uint, bool,  uint) {
    return (1, true, 2);
  }

  function named() public pure returns(uint x, bool b, uint y) {
    return (1, true, 2);
  }

  function assigned() public pure returns (uint x, bool b, uint y) {
    x = 1;
    b = true;
    y = 2;
  }

  function destructingAssignments()
    public pure returns (uint, bool, uint, uint, uint) {
      (uint i, bool b, uint j) = returnMany();
      (uint x, , uint y) = (4, 5, 6);
      return (i, b, j, x, y);
  }

  //CAN NOT USE ARRAY FOR INPUT
  function arrayInput(uint[] memory _arr) public {
  }

  // You can you array for output
  uint[] public arr;

  function arrayOutput() public view returns (uint[] memory) {
    return arr;
  }
}
