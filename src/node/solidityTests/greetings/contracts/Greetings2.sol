pragma solidity ^0.9.0;

contract FirstContract {

    // declaring a variable
    string public x = "";
    
    // writing a constructor
    constructor(string _x) {
        x = _x;
    }
    
    // setting the variable 
    function setData(string memory _x) public {
        x = _x;
    }
    
    // getting the variable
    function getData() public view returns (string) {
        return x;
    }
}