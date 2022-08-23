 import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('Test yearsAgo function' , function(){
    it('It should return 46 years when called by 1976' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    it('It should return 22 years when called by 2000' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));

    });

});