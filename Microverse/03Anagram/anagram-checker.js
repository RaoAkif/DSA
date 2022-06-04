module.exports = function (str1, str2) {
  let sortedArray1 = str1.replace(/[^a-z0-9]/gis, '').toLowerCase().split('').sort().join('');
  let sortedArray2 = str2.replace(/[^a-z0-9]/gis, '').toLowerCase().split('').sort().join('');
  return sortedArray1 === sortedArray2 ? true : false
};
