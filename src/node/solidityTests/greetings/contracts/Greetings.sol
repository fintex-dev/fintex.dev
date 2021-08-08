pragma solidity ^0.8.6;

contract MatsFirstContract {

    // declaring a variable
    uint public x = 6;
    
    // writing a constructor
    constructor(uint  _x) {
        x = _x;
    }
    
    // setting the variable 
    function setData(uint  _x) public {
        x = _x;
    }
    
    // getting the variable
    function getData() public view returns (uint ) {
        return x;
    }
}