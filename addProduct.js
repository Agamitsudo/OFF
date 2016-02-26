function addProduct(section) {
   $("#" + section).empty();
   $("#" + section).append("<div id='logging'><form>User name:<br><input type='text' id='z1'><br>User password:<br><input type='password' id='z2'></form></div><br><br>");
   $("#" + section).append("<div id='data'><form>Bar code:<br><input type='text' id='z3'><br>Product name:<br><input type='text' id='z4'><br><input id='add' type='button' value='add product'></form></div>");
   $('#logging').hide().fadeIn(500);
   $('#data').hide().fadeIn(1000);
   $('#add').click(function() {
      var url = "http://world.openfoodfacts.org/cgi/product_jqm2.pl?";
      var dt = 'user_id=' + $('#z1').val();
      dt += '&password=' + $('#z2').val();
      dt += '&code=' + $('#z3').val();
      dt += '&product_name=' + $('#z4').val();
      url += dt;
      var xhr = new XMLHttpRequest();
      xhr.open('get', url, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
         var status = xhr.status;
         if (status == 200) {
            alert(xhr.response.status);
         }
         else {
            alert(status);
         }
      };
      xhr.send();
   });
}
