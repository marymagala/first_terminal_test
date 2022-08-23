import assert from "assert";
import transportFee from "../transportFee.js";

describe('My TransportFee function' , function(){
    it('it should return R20 when called by morning' , function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('it should return R10 when called by afternoon' , function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('it should return free when called by nightshift' , function(){
        assert.equal(transportFee('nightshift'), 'free');
    });

});