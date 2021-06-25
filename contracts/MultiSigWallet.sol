// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MultiSigWallet {
  event Deposit(address indexed sender, uint amount, uint balance);
  event SubmitTransaction(
    address indexed owner,
    uint indexed txIndex,
    address indexed to,
    uint value,
    bytes data
  );

  event ConfirmTransaction(address indexed owner, uint indexed txIndex);
  event RevokeConfirmation(address indexed owner, uint indexed txIndex);
  event ExecuteTransaction(address indexed owner, uint indexed txIndex);

  address[] public owners;
  mapping(address => bool) public isOwner;
  uint public numConfirmationRequired;

  struct Transaction {
    address to;
    uint value;
    bytes data;
    bool executed;
    uint numConfirmation;
  }

  mapping(uint => mapping(address => bool)) public isConfirmed;

  Transaction[] public transactions;

  modifier onlyOwner() {
    require(isOwner[msg.sender], "not owner");
    _;
  }

  modifier txExists(uint _txIndex) {
    require(_txIndex < transactions.length, "txt does not exists");
    _;
  }

  modifier notExecuted(uint _txIndex) {
    require(!transactions[_txIndex].executed, "tx already executed");
    _;
  }

  modifier notConfirmed(uint _txIndex) {
    require(!isConfirmed[_txIndex][msg.sender], "tx already confirmed");
    _;
  }

  constructor(address[] memory _owners, uint _numConfirmationsRequired) {
    require(_owners.length > 0, "owners required");
    require(
      _numConfirmationsRequired > 0 && _numConfirmationsRequired <= _owners,
      "invalid number of required confirmations"
    );

    for(uint i = 0; i < _owners.length; i ++) {

    }
  }
}
