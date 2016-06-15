module.exports = {
	getProvinceFullNameByShort : function (a) {
  		if (a.toLowerCase() == 'bc')
  			return 'British Columbia';
  		else
  			return 'Unknown';
  	}
};