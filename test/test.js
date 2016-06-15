var assert = require("assert");
var m      = require("../ProvinceFullName");

describe("ProvinceFullName.getProvinceFullNameByShort()", function () {
  it("should get full name for BC (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('BC'), 'British Columbia');
  });
  
  it("should get full name for bc (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('bc'), 'British Columbia');
  });
  
  it("should return Unknown for others", function () {
    assert.equal(m.getProvinceFullNameByShort('DC'), 'Unknown');
  });
});