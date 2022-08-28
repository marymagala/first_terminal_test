import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('isWeekday' , function(){

  it('It should return true if it is a weekday' , function(){
      assert.equal(isWeekday('Monday'), true);
  })

  it('It should return false if it is not a weekday' , function(){
    assert.equal(isWeekday('Saturday'), false);
})


})