//
// getJSON
//
var getJSON = function(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
};

//
// clearSections
//
function clearSection(section)
{
	document.getElementById(section).innerHTML = "";
}

//
// displayChart(chartype, datatype)
//
function displayChart(typechart, datatype)
{
	var url = "";
	var data = "";

	if (datatype == 'Countries where sold')
		url = "http://world.openfoodfacts.org/countries.json";

	getJSON("http://world.openfoodfacts.org/countries.json").then(function(data) {
		if (typechart == "pie")	
			pieChart(data.tags);
		else if (typechart == "bar")	
			simpleBarChart(data.tags);
	}, function(status) { //error detection....
		alert("error");
	});
}
