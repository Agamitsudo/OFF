function displayChart(typechart, datatype){

	var url = "";
	var data = "";

	if (datatype == 'Countries of products')
		url = "http://world.openfoodfacts.org/countries.json";
	else if (datatype == 'Additives')
		url = "http://world.openfoodfacts.org/additives.json";
	else if (datatype == 'Traces')
		url = "http://world.openfoodfacts.org/traces.json";
	else if (datatype == 'Allergens')
		url = "http://world.openfoodfacts.org/allergens.json";

	$.getJSON((url), function(data) {
	
		if (typechart == "pie")	
			pieChart(data.tags);
		else if (typechart == "bar")	
			simpleBarChart(data.tags);
		else if (typechart == "bubble")	
			bubbleChart(data.tags);

	}, function(status) { //error detection....
		alert("error");
	});

}
