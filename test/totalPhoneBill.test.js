import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe('My totalPhoneBill function' , function(){

  it('It should return R7.45 when called by call, sms, call, sms, sms ' , function(){
      assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));

  });

  it('It should return R3.40 when called by call, sms ' , function(){
      assert.equal('R3.40', totalPhoneBill('call, sms'));

  });

  it('It should return R1.30 when called by sms, sms ' , function(){
      assert.equal('R1.30', totalPhoneBill('sms, sms'));

  });

});