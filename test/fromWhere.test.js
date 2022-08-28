import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('fromWhere' , function(){

  it('It should return the town where the car is from based on the registration number' , function(){
      assert.equal(fromWhere('CY'), 'Bellville');
  })

})