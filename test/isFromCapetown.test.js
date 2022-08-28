import assert from "assert";
import isFromCapeTown from "../isFromCapeTown.js";

describe('isFromCapeTown' , function(){

  it('It should be true if registration number starts with CY' , function(){
      assert.equal(isFromCapeTown('CA 123 908'), true);
  })

  it('It should be false if registration number does not starts with CJ' , function(){
    assert.equal(isFromCapeTown('CJ 123 908'), false);
})


  });