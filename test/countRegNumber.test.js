import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('The countRegNumber function', function(){

    it('It should return the number of registration when called a string of registration numbers', function(){
        assert.equal('3', countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });
    
});

