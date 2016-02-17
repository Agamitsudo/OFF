//
// addProduct()
//
function addProduct(section)
{
	 clearSection(section);
         $("#" + section).append("<div id='loggin'><form>User name:<br><input type='text' id='username'><br>User password:<br><input type='password' id='psw'></form></div><br><br>");
         $("#" + section).append("<div id='data'><form>Bar code:<br><input type='text' id='barcode'><br>Product name:<br><input type='text' id='productname'><br><input id='add' type='button' value='add product'></form></div>");


          $('#loggin').hide().fadeIn(500);
          $('#data').hide().fadeIn(1000);

          $('#add').click(function(){
 		
	      var foodfactObj = new Object();

	      foodfactObj.code = $('#barcode').val();
	      foodfactObj.product_name = $('#productname').val();
	      foodfactObj.user_id = $('#username').val()
	      foodfactObj.password = $('#psw').val();
	      
	      $.ajax({
    			type: "POST",
    			headers: {
      			  'Accept': 'application/json',
       			  'Content-Type': 'text/plain'
  		},
   		dataType: "json",
   		url: "http://world.openfoodfacts.org/cgi/product_jqm2.pl",
   		data: JSON.stringify(foodfactObj),
    		success: function (data) {
        		alert(JSON.stringify(data));
    		}
	      });   
	});
}
