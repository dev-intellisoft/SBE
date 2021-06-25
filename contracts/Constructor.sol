// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract cX {
  string public name;
  constructor (string memory _name) public {
    name = _name;
  }

  function getName() public view returns(string memory) {
    return name;
  }
}

contract cY {
  string public text;
  constructor(string memory _text) public {
    text = _text;
  }
  function getText() public view returns(string memory) {
    return text;
  }
}

contract cB is cX("Input to X"), cY("Input to Y") {}

contract cC is cX, cY {
  constructor (string memory _name, string memory _text) public cX(_name) cY(_text) {}
}

contract cE is cX, cY {
  constructor () public cX("X was called") cY("Y was called") {}
}


