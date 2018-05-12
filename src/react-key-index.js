/** deprecated library called react-key-index
 *  imported the index.js to the src to change a few thigns so it will be supported
 *  TODO: Find another supported library.
 */

import Hashids from 'hashids'

export default  function (arr, label) {
	var hashids = new Hashids();
	// eslint-disable-next-line
	var x = parseInt(label);
	// eslint-disable-next-line
	var digits = [9, 9, x];
	// eslint-disable-next-line
	var obj = {};
	// eslint-disable-next-line
	var array = arr;
	// eslint-disable-next-line
	var matrix = [];

	var result = arr.map(function(arr, index) {
		digits.push(index);
		if (typeof arr === 'object') {
			var i = 0;
			Object.keys(arr).forEach(function(key) {
				var x = '';
				digits.push(i);
				x = '_' + key + 'Id';
				arr[x] = hashids.encode(digits);
				digits = digits.slice(0, 6);
				console.log(digits);
				i++;
			});
			return arr;
		} else {
			obj = {
				value: arr,
				id: hashids.encode(digits)
			};
			digits = digits.slice(0, 5);
			return obj;
		}
		//matrix.push(digits);
	});
  return result;
};