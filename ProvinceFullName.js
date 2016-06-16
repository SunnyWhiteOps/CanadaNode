var province = new Array();
province['ab'] = 'Alberta';
province['bc'] = 'British Columbia';
province['mb'] = 'Manitoba';
province['nb'] = 'New Brunswick';
province['nl'] = 'Newfoundland and Labrador';
province['nt'] = 'Northwest Territories';
province['ns'] = 'Nova Scotia';
province['nu'] = 'Nunavut';
province['on'] = 'Ontario';
province['pe'] = 'Prince Edward Island';
province['qc'] = 'Quebec';
province['sk'] = 'Saskatchewan';
province['yt'] = 'Yukon';
	
module.exports = {
	getProvinceFullNameByShort : function (a) {
  		return province[a.toLowerCase()];
  	}
};