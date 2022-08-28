import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('isFromBellVille' , function(){

  it('It should be true if registration number starts with CY' , function(){
      assert.equal(isFromBellville('CY 123'), true);
  })

  it('It should be false if registration number does not starts with CY' , function(){
    assert.equal(isFromBellville('CJ 123'), false);
})


  });