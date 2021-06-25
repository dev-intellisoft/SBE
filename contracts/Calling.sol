// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract cpA {
    event Log(string message);

    function foo() public {
        emit Log("cpA.foo called");
    }

    function bar() public {
        emit Log("cpA.bar called");
    }
}

contract cpB is cpA {
    function foo() public {
        emit Log("cpB.foo called");
    }

    function bar() public {
        emit Log("cpB.bar called");
    }
}

contract cpC is cpA {
    function foo() public {
        emit Log("cpC.foo called");
        cpA.foo();
    }

    function bar() public {
        emit Log("cpC.bar called");
        super.bar();
    }
}

contract cpD is cpB, cpC {
    function foo() public {
        super.foo();
    }

    function bar() public {
        super.bar();
    }
}
