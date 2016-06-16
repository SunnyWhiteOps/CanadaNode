var assert = require("assert");
var m      = require("../ProvinceFullName");

describe("ProvinceFullName.getProvinceFullNameByShort()", function () {
  it("should get full name for AB (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('AB'), 'Alberta');
  });
  
  it("should get full name for ab (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('ab'), 'Alberta');
  });
  
  it("should get full name for BC (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('BC'), 'British Columbia');
  });
  
  it("should get full name for bc (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('bc'), 'British Columbia');
  });
  
  it("should get full name for MB (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('MB'), 'Manitoba');
  });
  
  it("should get full name for mb (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('mb'), 'Manitoba');
  });
  
  it("should get full name for NB (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('NB'), 'New Brunswick');
  });
  
  it("should get full name for nb (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('nb'), 'New Brunswick');
  });
  
  it("should get full name for NL (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('NL'), 'Newfoundland and Labrador');
  });
  
  it("should get full name for nl (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('nl'), 'Newfoundland and Labrador');
  });
  
  it("should get full name for NT (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('NT'), 'Northwest Territories');
  });
  
  it("should get full name for nt (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('nt'), 'Northwest Territories');
  });
  
  it("should get full name for NS (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('NS'), 'Nova Scotia');
  });
  
  it("should get full name for ns (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('ns'), 'Nova Scotia');
  });
  
  it("should get full name for NU (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('NU'), 'Nunavut');
  });
  
  it("should get full name for nu (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('nu'), 'Nunavut');
  });
  
  it("should get full name for ON (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('ON'), 'Ontario');
  });
  
  it("should get full name for on (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('on'), 'Ontario');
  });
  
  it("should get full name for PE (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('PE'), 'Prince Edward Island');
  });
  
  it("should get full name for pe (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('pe'), 'Prince Edward Island');
  });
  
  it("should get full name for QC (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('QC'), 'Quebec');
  });
  
  it("should get full name for qc (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('qc'), 'Quebec');
  });
  
  it("should get full name for SK (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('SK'), 'Saskatchewan');
  });
  
  it("should get full name for sk (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('sk'), 'Saskatchewan');
  });
  
  it("should get full name for YT (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('YT'), 'Yukon');
  });
  
  it("should get full name for yt (case insensitive)", function () {
    assert.equal(m.getProvinceFullNameByShort('yt'), 'Yukon');
  });
  
  it("should return undefined for DC", function () {
    assert.equal(m.getProvinceFullNameByShort('DC'), undefined);
  });
  
  it("should return undefined for qq", function () {
    assert.equal(m.getProvinceFullNameByShort('qq'), undefined);
  });
  
  it("should return undefined for ", function () {
    assert.equal(m.getProvinceFullNameByShort(''), undefined);
  });
  
  it("should return undefined for --", function () {
    assert.equal(m.getProvinceFullNameByShort('--'), undefined);
  });
  
  it("should return undefined for 12", function () {
    assert.equal(m.getProvinceFullNameByShort('12'), undefined);
  });
  
  
  it("should return undefined for 加州", function () {
    assert.equal(m.getProvinceFullNameByShort('加州'), undefined);
  });
});